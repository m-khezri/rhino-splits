import React, { Component } from 'react';
import '../App/App.scss';
import firebase from 'firebase/app';
import connection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavar/MyNavbar';
import authRequests from '../helpers/data/authRequests';

import ControlBar from '../components/ControlBar/ControlBar';
import TransactionHistroy from '../components/TransactionsHistory/TransactionsHistory';
import ContactsList from '../components/ContactsList/ContactsList';

class App extends Component {
  state = {
    authed: false,

  }

  componentDidMount() {

    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });

  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {

      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} isAuthenticated={this.isAuthenticated} logoutClickEvent={logoutClickEvent} />
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar
          isAuthed={this.state.authed}
          logoutClickEvent={logoutClickEvent} />
        <div className="components-container d-flex flex-wrap">
          <TransactionHistroy />
          <div className='right-components-cont d-flex flex-column flex-wrap bg-secondary'>
            <ControlBar />
            <ContactsList />
          </div>
        </div>

      </div>
    );
  }
}

export default App;