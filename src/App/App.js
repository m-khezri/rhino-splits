import React, { Component } from 'react';
import './App.scss';
import firebase from 'firebase/app';
import connection from '../helpers/data/connection';
import MyNavbar from '../components/MyNavar/MyNavbar';
import authRequests from '../helpers/data/authRequests';
import friendsRequests from '../helpers/data/friendsRequests';
import transactionsRequests from '../helpers/data/transactionsRequests';
import TransactionHistroy from '../components/TransactionsHistory/TransactionsHistory';
import ContactsList from '../components/ContactsList/ContactsList';
import NewContactForm from '../components/NewContactForm/NewContactForm';

class App extends Component {
  state = {
    authed: false,
    friends: [],
    transactions: [],
    isEditing: false,
    editId: '-1',
  }

  componentDidMount() {
    connection();

    transactionsRequests.getRequest()
      .then((transactions) => {
        this.setState({ transactions });
      })
      .catch(err => console.error('error with listing GET', err));

    friendsRequests.getRequest()
      .then((friends) => {
        this.setState({ friends });
      })
      .catch(err => console.error('error with listing GET', err));

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

  deleteOne = (friendId) => {
    friendsRequests.deleteFriends(friendId)
      .then(() => {
        friendsRequests.getRequest()
          .then((friends) => {
            this.setState({ friends });
          });
      })
      .catch(err => console.error('error with delete single', err));
  }

  formSubmitEvent = (newContact, isEditing) => {
    // const { isEditing, editId } = this.state;
    if (isEditing) {
      const friendEditing = { ...newContact };
      const editId = newContact.id;
      delete friendEditing.id;
      friendsRequests.putRequest(editId, friendEditing)
        .then(() => {
          friendsRequests.getRequest()
            .then((friends) => {
              this.setState({ friends, isEditing: false, editId: '-1' });
            });
        })
        .catch(err => console.error('error with friends post', err));
    } else {
      friendsRequests.postRequest(newContact)
        .then(() => {
          friendsRequests.getRequest()
            .then((friends) => {
              this.setState({ friends });
            });
        })
        .catch(err => console.error('error with friends post', err));
    }
  }

  passFriendToEdit = friendId => this.setState({ isEditing: true, editId: friendId });


  render() {
    const {
      authed,
      friends,
      isEditing,
      editId,
    } = this.state;


    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={authed}
            isAuthenticated={this.isAuthenticated}
            logoutClickEvent={logoutClickEvent} />
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar
          isAuthed={authed} logoutClickEvent={logoutClickEvent} />
        <div className="components-container d-flex flex-wrap">
          <TransactionHistroy
            transactions={this.state.transactions}
          />
          <div className='right-components-cont d-flex flex-column flex-wrap bg-secondary'>
            <NewContactForm onSubmit={this.formSubmitEvent} isEditing={isEditing} editId={editId} />
            <ContactsList
              friends={friends}
              deleteSingleFriend={this.deleteOne}
              passFriendToEdit={this.passFriendToEdit}
              formSubmitEvent={this.formSubmitEvent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
