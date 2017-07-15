import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import axios from 'axios';
import {toast} from 'react-toastify';
class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }
  toggleForm = (formToggled) => {
    console.log(formToggled);
    this.props.toggleRegisterForm(!formToggled);
  }

  handleClick = () => {
    this.toggleForm(this.props.registerFormToggled)
    let dropDown = document.getElementById('loginDropdown');
    dropDown.click();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    // Preserve this
    const that = this;

    // Check that passwords match
    if (this.state.password === this.state.password_confirmation) {

      // Post to registration route
      axios.post('http://localhost:3000/users', {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
      })
      .then((response) => {

        // If our response is not false
        if (response.data.status) {

          // Display success and show login
          toast.success(response.data.message, {
            autoClose: 4000,
            position: 'bottom-center'
          });
          that.handleClick();
        } else {

          // Display error
          toast.success(response.data.message, {
            autoClose: 4000,
            position: 'bottom-center'
          });
        }
      }).catch((error) => console.log(error));
    } else {
      toast.success("Your passwords do not match", {
        autoClose: 4000,
        position: 'bottom-center'
      });
    }
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }
  handlePasswordConfirmChange = (e) => {
    this.setState({password_confirmation: e.target.value});
  }

  renderForm = (formToggled) => {
    if (formToggled) {
      return (
        <ul id="register-dp" className="registerDropdown">
          <li>
             <div className="row">
                <div className="col-md-12">
                   <form className="form" onSubmit={(e) => this.handleFormSubmit(e)} acceptCharset="UTF-8" id="login-nav">
                      <div className="form-group">
                      <button type="submit" data-toggle="dropdown" onClick={() => this.handleClick()} className="btn btn-primary btn-block">Login</button>
                      </div>
                      <div className="form-group">
                         <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                         <input type="email" onChange={this.handleEmailChange}  value={this.state.email} className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
                      </div>
                      <div className="form-group">
                         <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                         <input type="password" onChange={this.handlePasswordChange} value={this.state.password} className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                      </div>
                      <div className="form-group">
                         <label className="sr-only" htmlFor="exampleInputPassword2">Confirm Password</label>
                         <input type="password" onChange={this.handlePasswordConfirmChange} value={this.state.password_confirmation} className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" required/>
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
