import React, { Component } from 'react';

class Login extends Component {

  state = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
    isError: false
  }

  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid){
      this.props.setUsername(this.state.username);
      this.props.changeActiveMenu("showHome");
    }else{
      console.log("no es valido");
    }
  }

  validate = () => {
    this.validateUsername(this.state.username);
    this.validatePassword(this.state.password);
    if(this.state.isError){
      return false;
    }
    return true;
  }

  validateUsername = (_username) => {
    let usernameError = "";
    let isError = false;
    if(!(/^[a-z0-9!"$%&/]{8,20}$/).test(_username)){
      usernameError = 'nombre de usuario entre 8 - 20 carateres, letras, números y los siguientes caracters: !"$%&/ ';
      isError = true;
    }
    this.setState({
      usernameError: usernameError,
      isError: isError
    });

    if(this.state.usernameError.length === 0 && this.state.passwordError.length === 0 && isError === false)
      document.getElementById("buttonForm").disabled = false;

    return isError;
  }

  validatePassword = (_password) => {
    let passwordError="";
    let isError = false;
    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"$%&/]).{8,20}$/).test(_password)){
      passwordError = 'contraseña entre 8 - 20 carateres, letras, números, 1 mayuscula, 1 minuscula y 1 de los siguientes caracters: !"$%&/';
      isError = true;
    }
    this.setState({
      passwordError: passwordError,
      isError: isError
    });

    if(this.state.usernameError.length === 0 && this.state.passwordError.length === 0 && isError === false)
      document.getElementById("buttonForm").disabled = false;

    return isError;
  }

  onChangeUserName = e => {
    this.validateUsername(e.target.value);
    this.setState({
      username: e.target.value
    });

  }

  onChangePassword = e => {
    this.validatePassword(e.target.value);
    this.setState({
      password: e.target.value
    });
  }

  render() {
    if(this.props.estadoC){
      return (<div className="container">

        <div className="viewport-height d-flex flex-row justify-content-center align-items-center">
            <div className="col-6 text-center card">

                <div className="card-body">
                    <h2 className="m-5">Login</h2>
                    <form id="formaLogin" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    onChange={this.onChangeUserName}
                                    value={this.state.username} />
                            <div className="text-danger">{this.state.usernameError}</div>
                        </div>
                        <div className="form-group">
                            <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.onChangePassword}
                                    value={this.state.password} />
                                  <div className="text-danger">{this.state.passwordError}</div>
                        </div>
                        <div className="form-group">
                            <button id="buttonForm" className="btn btn-secondary m-3" disabled>Enter</button>
                        </div>
                    </form>
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

export default Login;
