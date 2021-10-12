import React, { Component } from 'react';
// import balance from '../service/balance.json';

class NavBar extends Component {

  menuActive = e => {
    e.preventDefault();
    this.props.changeActiveMenu(e.target.id);
    if(e.target.id === "showLogin"){
      this.props.setRestart();
      window.location.reload();
    }
  }

  render() {
    let {showLogin, showHome, showTransfer} = this.props.activeMenu();
    console.log(showHome + ' ' + showTransfer);
    return (<div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item" style={{ display: !showLogin ? 'none' : 'block' }}>
                    <a href="login" className="nav-link">Company</a>
                </li>
                <li className="nav-item" style={{ display: showLogin ? 'none' : 'block' }}>
                    <a onClick={this.menuActive} id="showHome" href="home" className="nav-link">Home</a>
                </li>
                <li className="nav-item" style={{ display: showLogin ? 'none' : 'block' }}>
                    <a onClick={this.menuActive} id="showTransfer" href="transfer" className="nav-link">Transfer</a>
                </li>
              </ul>
              <ul className="navbar-nav" style={{ display: showLogin ? 'none' : 'block' }}>
                <li className="nav-item text-right" >
                    <a onClick={this.menuActive} id="showLogin" href="login" className="nav-link">Log Out</a>
                </li>
              </ul>

          </div>
      </nav>
    </div>

    );
  }
}

export default NavBar;
