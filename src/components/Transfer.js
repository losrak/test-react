import React, { Component } from 'react';
import Chart from './Chart';

class Transfer extends Component {

  state = {
      indexAccount: 0,
      accountsBalance: this.props.getBalance,
      toAccount: '',
      amount: '',
      sentAt: new Date(),
      amountError: '',
      toAccountError: '',
      enoughMoney: ''
  }

  formatDate(date){
    date = new Date(date);
    date = new Intl.DateTimeFormat('es-ES').format(date);
    let splitDate = date.split("/");
    splitDate[splitDate.length-1] = splitDate[splitDate.length-1].substr(-2);
    let finalDate = splitDate.join("/");
    return finalDate;
  }

  onSubmit = e => {
    e.preventDefault();
    let newBalance;
    let balance;
    let amount;
    const isValid = this.validate();
    if(isValid){
        this.props.addTransaction({
          fromAccount: parseInt(this.state.accountsBalance[this.state.indexAccount].account),
          toAccount: parseInt(this.state.toAccount),
          amount: {currency: this.state.accountsBalance[this.state.indexAccount].balance.currency,
            value: parseInt(this.state.amount)},
            sentAt: new Date()
          });
        balance = parseInt(this.state.accountsBalance[this.state.indexAccount].balance.value);
        amount = parseInt(this.state.amount);
        newBalance =  balance - amount;
        let newBalanceArray = this.props.getBalance.map((account, index) => {
          if(this.state.indexAccount === index){
            account.balance.value = newBalance;
            account.createdAt = this.state.sentAt;
          }
          return account;
        });
        this.setState({
          accountsBalance: newBalanceArray
        });
        this.props.setNewBalance(newBalanceArray);
    }
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onChangeSelect = e => {
    let values = e.target.value.split(',');
    this.setState({
      indexAccount: parseInt(values[0])
    });
  }

  cleanForm = e => {
    e.preventDefault();
    this.setState({
      toAccount: 0,
      amount: 0
    });
  }

  validate = () => {
    let amountError = '';
    let toAccountError = '';
    let enoughMoney = '';
    let isError = false;

    if(this.state.accountsBalance[this.state.indexAccount].balance.value - this.state.amount < 0 ){
      enoughMoney = 'Fondos insuficientes';
      isError = true;
    }
    if(this.state.toAccount.length !== 8 ){
      toAccountError = 'Cuenta invalida, debe de ser de 8 digitos';
      isError = true;
    }
    if(this.state.amount <= 0 || this.state.amount > 100000 ){
      amountError = 'cantidad no valida';
      isError = true;
    }

    this.setState({
      amountError: amountError,
      toAccountError: toAccountError,
      enoughMoney: enoughMoney
    });

    if(isError){
      return false;
    }

    return true;
  }

  render() {

    if(this.props.estadoC){
      return (
        <div>
          <div className="row mt-5">
              <div className="col-sm-4">
                  <div className="card">
                      <div className="card-body">
                          <h3>Create new transfer</h3>
                          <form id="form" onSubmit={this.onSubmit}>
                              <div className="form-group">
                                  <label>Select origin account</label>
                                  <select name="fromAccount" className="custom-select" onChange={this.onChangeSelect} >
                                    {
                                      this.props.getBalance.map( (item, index) => {
                                        return <option key={index} value={[index, item.account, item.balance.currency, item.balance.value]}>
                                          **** {item.account.toString().substr(-4)} - {item.balance.currency}{item.balance.value}
                                        </option>
                                      })
                                    }
                                  </select>
                              </div>
                              <div className="text-danger">{this.state.enoughMoney}</div>
                              <div className="form-group">
                                  <label>Destination account</label>
                                  <input type="text"
                                          className="form-control"
                                          name="toAccount"
                                          onChange={this.onChange}
                                          value={this.state.toAccount} />
                              </div>
                              <div className="text-danger">{this.state.toAccountError}</div>
                              <div className="form-group">
                                  <label>Amount</label>
                                  <input type="text"
                                          className="form-control"
                                          name="amount"
                                          onChange={this.onChange}
                                          value={this.state.amount} />
                              </div>
                              <div className="text-danger">{this.state.amountError}</div>
                              <div className="form-group mt-3 text-right">
                                  <button className="btn btn-primary">
                                      Transfer
                                  </button>
                                  <button onClick={this.cleanForm} name="cancel" className="btn cancel m-2">Cancel</button>
                              </div>
                          </form>

                      </div>

                  </div>
              </div>
              <div className="col-sm-8">
                  <h4 className="text-center">Transactions By Destination Account</h4>
                  <Chart getTransactionsByDesAccount={this.props.getTransactionsByDesAccount} />
              </div>
          </div>

          <div className="row m-5">
              <div className="col">
                {
                  this.props.getTransactionsByOriginAccount.map( (account, index) => {
                    return <table className="table" key={index}>
                      <thead>
                          <tr>
                              <th>Origin Account</th>
                              <th>Destination Account</th>
                              <th>Transfer date</th>
                              <th>Amount</th>
                          </tr>
                      </thead>
                      <tbody>
                        {account.map( (item, key) => {
                          return <tr key={key}>
                                  <td>{item.fromAccount}</td>
                                  <td>{item.toAccount}</td>
                                  <td>{this.formatDate(item.sentAt)}</td>
                                  <td>{item.amount.currency} {item.amount.value}</td>
                              </tr>
                        })}
                      </tbody>
                    </table>
                  })
                }
              </div>
          </div>
        </div>
      );
    }else{
      return null;
    }
  }
}

// Transfer.propTypes = {
//   fromAccount: PropTypes.number.isRequired
// }

export default Transfer;
