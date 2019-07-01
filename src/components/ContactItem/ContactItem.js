import React from 'react';
import './ContactItem.scss';
import PropTypes from 'prop-types';
import friendsShape from '../../helpers/propz/friendsShape';
import authRequests from '../../helpers/data/authRequests';

class ContactItem extends React.Component {
  static propTypes = {
    friend: friendsShape,
    deleteSingleFriend: PropTypes.func,
    passFriendToEdit: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleFriend, friend } = this.props;
    deleteSingleFriend(friend.id);

  }

  editEvent = (e) => {
    e.preventDefault();
    const { passFriendToEdit, friend } = this.props;
    console.log(passFriendToEdit);
    passFriendToEdit(friend.id);
  }

  render() {
    const { friend } = this.props;

    const uid = authRequests.getCurrentUid();

    const createButtons = () => {
      if (friend.uid === uid) {
        return (
          <div>
            <span className="col">
              <a href="http://localhost:3000/" className="mx-2 edit-btn" onClick={this.editEvent}>
                <i class="material-icons">
                  edit
              </i>
              </a>

              <a href="http://localhost:3000/" className="del-btn" onClick={this.deleteEvent}>
                <i className="material-icons">
                  close
                </i>
              </a>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };

    return (
      <div className='contact-card card bg-light shadow-sm rounded m-2 p-2'>
        <div className='p-2'>
          {createButtons()}

          <div>
            <p className='my-auto'><b>Name:</b> {friend.name}</p>
            <p className='my-auto'><b>Last name:</b> {friend.lastname}</p>
          </div>
          <div className="my-3">
            <p className='my-auto'><b>Phone:</b> {friend.phone}</p>
            <p className='my-auto'><b>E-mail:</b> {friend.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactItem;
