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
      application_name: '',
      description: '',
      url: '',
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }
  handleChange = (e, state) => {
    this.setState({[state]: e.target.value});
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
        minHeight={100}
        loading={this.state.loading}
      >
        <form>

          <TextField
            hintText="Project Name"
            floatingLabelText="Name of your Application"
            fullWidth
            onChange={(e) => this.handleChange(e, 'application_name')}
          />

          <TextField
            hintText="Description"
            floatingLabelText="Description of your Application"
            fullWidth
            onChange={(e) => this.handleChange(e, 'description')}
          />

          <TextField
            hintText="URL"
            floatingLabelText="URL location of your Application"
            fullWidth
            onChange={(e) => this.handleChange(e, 'url')}
          />



          <div style={styles.buttons}>
            <RaisedButton onClick={browserHistory.goBack} label="Cancel" />
            <RaisedButton
              label="Save"
              style={styles.saveButton}
              primary
              onClick={(e) => this.handleSubmit(e)}
            />
          </div>
        </form>
      </PageBase>
    );
  }
}

export default FormPage;
