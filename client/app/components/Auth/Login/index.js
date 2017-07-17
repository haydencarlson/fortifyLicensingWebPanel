import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import styles from '../styles';

class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="login-form">
        <div style={styles.boxContainer}>
          <Paper style={styles.paper}>
            <div style={styles.logoContainer}>
              <img
                style={{ width: 295, height: 54 }}
                src="http://i.imgur.com/6btdAOq.png" alt="Fortress Admin Template"
              />
            </div>
            {
              this.props.errorMessage ? (
                <div>
                  <p style={styles.errorMessage}>
                    * {this.props.errorMessage}
                  </p>
                </div>
              ) : null
            }

            <form>
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth
                value={this.props.email}
                onChange={this.props.onEmailChange}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth
                type="password"
                value={this.props.password}
                onChange={this.props.onPasswordChange}
              />

              <div style={styles.buttonsContainer}>
                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                  checked={this.props.rememberMe}
                  onCheck={this.props.onRememberMeChange}
                />

                <RaisedButton
                  label="Login"
                  primary
                  style={styles.boxBtn}
                  onClick={this.props.onSignIn}
                />

              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <FlatButton
              label="Forgot Password?"
              onClick={this.props.onForgotPassword}
              style={styles.flatButton}
              icon={<FontIcon className="material-icons">help</FontIcon>}
            />
            <FlatButton
              label="Register"
              onClick={this.props.onRegister}
              style={styles.flatButton}
              icon={<FontIcon className="material-icons">person_add</FontIcon>}
            />
          </div>

          <div style={styles.buttonsDiv}>

          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  rememberMe: PropTypes.any.isRequired,
  onRememberMeChange: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Login;
