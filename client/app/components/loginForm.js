import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <form>
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">@</span>
        <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon1">*</span>
        <input type="text" className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
      </div>

      </form>
    )
  }
}
