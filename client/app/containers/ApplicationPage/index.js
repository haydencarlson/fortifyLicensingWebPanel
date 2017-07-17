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
import Table from '../../components/Table/index.js';
export class ApplicationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Helmet
          title="Your Applications"
          meta={[
            { name: 'description', content: 'Table of registered applications' },
          ]}
        />
        <Table/>
      </div>
    );
  }
}

ApplicationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ApplicationPage: makeSelectApplicationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);
