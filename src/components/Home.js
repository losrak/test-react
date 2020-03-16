import React, { Component } from 'react';
import exampleImg from '../assets/images/320x200-example.jpg';
import Chart from './Chart';

class Home extends Component {

  state = {
   show: true
  }

  formatDate(date){
    date = new Date(date);
    date = new Intl.DateTimeFormat('es-ES').format(date);
    let splitDate = date.split("/");
    splitDate[splitDate.length-1] = splitDate[splitDate.length-1].substr(-2);
    let finalDate = splitDate.join("/");
    return finalDate;
  }

  // getBalance = () => {
  //
  //   this.props.balance.map(account => {
  //     console.log("entró")
  //     return (
  //   });
  // }

  render() {
    if(this.props.estadoC){
      return (
        <div>
          <div className="row text-center mt-5 mb-5">
              <div className="col">
                  <h1 className="welcome">Welcome to your online banking {this.props.getUsername()}</h1>
              </div>
          </div>

          <div className="row">
              <div className="col-sm">
                  <div className="card">
                      <div className="card-body">
                        <Chart getTransactionsByDesAccount={this.props.getTransactionsByDesAccount} />
                          <h3 className="mt-3">Transaction History</h3>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam similique labore illum exercitationem mollitia repellendus distinctio praesentium magnam architecto ut, aut laborum ipsam pariatur alias sed non est nulla nesciunt?</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm">
                  <div className="card">
                      <img src={exampleImg} alt="example" />
                      <div className="card-body">
                          <h3>Main Expenses</h3>
                          <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum, repellat minus possimus ex veritatis sit sint maxime, tempora ipsum repellendus dicta dolores laboriosam animi sunt similique dolore magnam itaque?
                          </p>
                      </div>
                  </div>
              </div>
              <div className="col-sm">
                  <div className="card">
                      <div className="card-body">
                          <h3>Current Balance</h3>
                          <table className="table balance table-hover">
                              <thead>
                                  <tr>
                                      <th>
                                          <p>Account No.</p>
                                      </th>
                                      <th>
                                          <p>Balance</p>
                                      </th>
                                      <th>
                                          Date of Lastest Transfer
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                                  { this.props.getBalance.map( (account, index) => {
                                    return <tr key={index}>
                                      <td> ****{ account.account.toString().substr(-4) }</td>
                                      <td>{ account.balance.currency }{ account.balance.value  }</td>
                                      <td>{ this.formatDate(account.createdAt) }</td>
                                    </tr>
                                  }) }
                              </tbody>
                          </table>
                      </div>
                  </div>

              </div>
          </div>
      </div>
      );
    }else{
      return null;
    }

  }
}

export default Home;
