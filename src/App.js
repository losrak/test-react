import React, {Component} from 'react';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import Transfer from './components/Transfer';

// sevices
import balanceService from './service/balance.json';
import transactions from './service/transactions.json';

class App extends Component {

  state = {
    menu : {
      showLogin: true,
      showHome: false,
      showTransfer: false
    },
    username: '',
    balance: balanceService,
    backbalance: balanceService,
    transactions: transactions
  }

  activeMenu = () => {
    return this.state.menu;
  }

  changeActiveMenu = (active) => {
    this.setState({
      menu: {
        showLogin: false,
        showHome: false,
        showTransfer: false,
        [active]: true
      }
    });
  }

  getUsername = () => {
    return this.state.username;
  }

  setUsername = username => {
    this.setState({
      username: username
    });
  }

  getBalance = () => {
    return this.state.balance;
  }

  getTransactions = () => {
    return this.state.transactions;
  }

  getTransactionsByDesAccount = () => {
    let toAccount = this.state.transactions.map( (element): string => element.toAccount );
    let unicos = toAccount.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
    let array: any[] = [];
    unicos.forEach( (unico) => {
      let aux: any[] = [];
      this.state.transactions.forEach(element => {
        if(unico === element.toAccount){
          aux.push(element);
        }
      });
      array.push(aux);
    });
    return array;
  }

  getTransactionsByOriginAccount = () => {
    let fromAccount = this.state.transactions.map( (element): string => element.fromAccount );
    let unicos = fromAccount.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
    let array: any[] = [];
    unicos.forEach( (unico) => {
      let aux: any[] = [];
      this.state.transactions.forEach(element => {
        if(unico === element.fromAccount){
          aux.push(element);
        }
      });
      array.push(aux);
    });
    return array;
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  setNewBalance = (newBalance) => {
    this.setState({
      balance: newBalance
    });
  }

  setRestart = () => {
    this.setState({
      username: '',
      balance: balanceService,
      transactions: transactions
    });
  }

  render() {

      return (
        <div>
          <NavBar changeActiveMenu={this.changeActiveMenu}
                  activeMenu={this.activeMenu}
                  setRestart={this.setRestart}
                  setNewBalance={this.setNewBalance} />
          <div className="mt-5 container">
            <Login estadoC={this.state.menu.showLogin}
                  changeActiveMenu={this.changeActiveMenu}
                  setUsername={this.setUsername} />
            <Home estadoC={this.state.menu.showHome}
                  getUsername={this.getUsername}
                  getBalance={this.getBalance()}
                  getTransactionsByDesAccount={this.getTransactionsByDesAccount()}
                  className="animated fadeIn" />
            <Transfer estadoC={this.state.menu.showTransfer}
                  getBalance={this.getBalance()}
                  transactions={this.getTransactions()}
                  getTransactionsByDesAccount={this.getTransactionsByDesAccount()}
                  getTransactionsByOriginAccount={this.getTransactionsByOriginAccount()}
                  addTransaction={this.addTransaction}
                  setNewBalance={this.setNewBalance} />
          </div>
        </div>
      );
  }


}


export default App;
