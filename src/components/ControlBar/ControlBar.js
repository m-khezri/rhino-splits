import React from 'react';
import './ControlBar.scss';
import NewContactForm from '../NewContactForm/NewContactForm';
import friendsRequests from '../../helpers/data/friendsRequests';


class ControlBar extends React.Component {


  formSubmitEvent = (newFriend) => {
    friendsRequests.postRequest(newFriend)
      .then(() => {
        friendsRequests.getRequest()
          .then((friends) => {
            this.setState({ friends });
          });
      })

      .catch(err => console.error('error with listings post', err));
  }

  render() {
    return (
      <div className="control-bar-container m-0">
        <NewContactForm onSubmit={this.formSubmitEvent} />
      </div>
    );
  }
}

export default ControlBar;