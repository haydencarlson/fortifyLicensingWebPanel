import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
class RegisterForm extends Component {

  toggleForm = (formToggled) => {
    console.log(formToggled);
    this.props.toggleRegisterForm(!formToggled);
  }

  handleClick = () => {
    this.toggleForm(this.props.registerFormToggled)
    let dropDown = document.getElementById('loginDropdown');
    dropDown.click();
  }

  renderForm = (formToggled) => {
    if (formToggled) {
      return (
        <ul id="register-dp" className="registerDropdown">
          <li>
             <div className="row">
                <div className="col-md-12">
                   <form className="form" onSubmit={this.handleFormSubmit} acceptCharset="UTF-8" id="login-nav">
                      <div className="form-group">
                      <button type="submit" data-toggle="dropdown" onClick={() => this.handleClick()} className="btn btn-primary btn-block">Login</button>
                      </div>
                      <div className="form-group">
                         <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                         <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
                      </div>
                      <div className="form-group">
                         <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                         <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                      </div>
                      <div className="form-group">
                         <label className="sr-only" htmlFor="exampleInputPassword2">Confirm Password</label>
                         <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" required/>
                      </div>
                      <div className="form-group">
                         <button type="submit" className="btn btn-primary btn-block">Register</button>
                      </div>
                   </form>
                </div>
             </div>
          </li>
        </ul>
      )
    }
    return (
      <div> </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderForm(this.props.registerFormToggled)}
      </div>
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    toggleRegisterForm: (bool) => {
      dispatch(actions.toggleRegisterForm(bool))
    }
  }
}

const mapStateToProps = function (state) {
  return ({
    registerFormToggled: state.registerFormToggled
  });
 }

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
