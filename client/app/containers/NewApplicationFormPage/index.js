import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {browserHistory} from 'react-router';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../../components/PageBase';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      value: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({
      value,
    });
  }

  render() {
    const styles = {
      toggleDiv: {
        maxWidth: 120,
        marginTop: 40,
        marginBottom: 5,
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100,
      },
      buttons: {
        marginTop: 30,
        float: 'right',
      },
      saveButton: {
        marginLeft: 5,
      },
    };

    return (
      <PageBase
        title="New Application Form"
        navigation="Application / New Application Page"
        minHeight={350}
      >
        <form>

          <TextField
            hintText="Project Name"
            floatingLabelText="Name of your Application"
            fullWidth
          />

          <TextField
            hintText="Description"
            floatingLabelText="Description of your Application"
            fullWidth
          />



          <div style={styles.buttons}>
            <RaisedButton onClick={browserHistory.goBack} label="Cancel" />
            <Link to="/table">
              <RaisedButton
                label="Save"
                style={styles.saveButton}
                primary
              />
            </Link>
          </div>
        </form>
      </PageBase>
    );
  }
}

export default FormPage;
