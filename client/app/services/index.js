import { browserHistory } from 'react-router';

export default {
  checkIfLoggedIn: () => {
    let token = localStorage.getItem('token');
    if (token) {
      browserHistory.push('/panel')
    }
  }
}
