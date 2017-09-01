/*
 *
 * ApplicationPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectApplicationPage from './selectors';
import { selectGlobal } from '../App/selectors';
import * as actions from './actions';
import Table from '../../components/Table/index.js';
export class ApplicationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.dispatch(actions.fetchApplications(this.props.appData.user.id))
    console.log(this.props, "props")
  }

  componentDidMount() {
    console.log('did mount', this.props)
  }
  render() {
    if (this.props.ApplicationPage.applications) {
      return (
        <div>
        <Helmet
        title="Your Applications"
        meta={[
          { name: 'description', content: 'Table of registered applications' },
        ]}
        />
        <Table applications={this.props.ApplicationPage.applications} endpoint="/applications" />
        </div>
      );
    } else {
      return (
        <div> </div>
      )
    }
  }
}

ApplicationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ApplicationPage: makeSelectApplicationPage(),
  appData: selectGlobal()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);
