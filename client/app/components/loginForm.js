import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';

class LoginForm extends Component {

  handleJoinUs = () => {
    this.props.toggleRegisterForm(!this.props.registerFormToggled);
  }

  render() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><p className="navbar-text">Already have an account?</p></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" id="loginDropdown" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
      			<ul id="login-dp" className="dropdown-menu">
      				<li>
      					 <div className="row">
      							<div className="col-md-12">
      								 <form className="form" onSubmit={this.handleFormSubmit} acceptCharset="UTF-8" id="login-nav">
      										<div className="form-group">
      											 <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
      											 <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
      										</div>
      										<div className="form-group">
      											 <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
      											 <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
      										</div>
      										<div className="form-group">
      											 <button type="submit" className="btn btn-primary btn-block">Sign in</button>
      										</div>
      										<div className="checkbox">
      											 <label>
      											 <input type="checkbox"/> keep me logged-in
      											 </label>
      										</div>
      								 </form>
      							</div>
      							<div className="bottom text-center">
      								New here ? <a href="#" onClick={this.handleJoinUs}><b>Join Us</b></a>
      							</div>
      					 </div>
      				</li>
      			</ul>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return ({
    registerFormToggled: state.registerFormToggled
  });
 }

const mapDispatchToProps = function (dispatch) {
  return {
    toggleRegisterForm: (bool) => {
      dispatch(actions.toggleRegisterForm(bool))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
