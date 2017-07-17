import React from 'react';
import PageBase from '../../components/PageBase';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 0); // global delay, it simulates fetch data
  }

  render() {
    return (
      <PageBase
        navigation="Application / Dashboard"
        noWrapContent
        loading={this.state.loading}
      >

      </PageBase>
    );
  }
}

export default DashboardPage;
