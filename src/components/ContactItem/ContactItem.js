import React from 'react';
import './ContactItem.scss';
import PropTypes from 'prop-types';
import friendsShape from '../../helpers/propz/friendsShape';
import authRequests from '../../helpers/data/authRequests';
import { Input } from 'reactstrap';

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
    passFriendToEdit(friend.id);
  }

  firstnamechange = e => this.editEvent('name', e);
  lastnamechange = e => this.editEvent('lastname', e);
  phonechange = e => this.editEvent('phone', e);
  emailchange = e => this.editEvent('email', e);

  render() {
    const { friend } = this.props;

    const uid = authRequests.getCurrentUid();

    const createButtons = () => {
      if (friend.uid === uid) {
        return (
          <div className="flip-card-back rounded">
            <h6 className="text-light">Make a payment, Update or delete contact</h6>
            <Input
              className="my-1"
              type="text"
              id="name"
              value={friend.name}
              onChange={this.firstnamechange}
            />
            <Input
              className="my-1"
              type="text"
              id="lastname"
              value={friend.lastname}
              onChange={this.lastnamechange}
            />
            <Input
              className="my-1"
              type="text"
              id="phone"
              value={friend.phone}
              onChange={this.phonechange}
            />
            <Input
              className="my-1"
              type="text"
              id="email"
              value={friend.email}
              onChange={this.emailchange}
            />

            <div className="btn-group btn-group-sm my-2">
              <button className="btn btn-success">Make a payment</button>
              <button className="btn btn-primary" onClick={this.editEvent}>Update</button>
              <button className="btn btn-danger" onClick={this.deleteEvent}>Delete</button>
            </div>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };

    return (
      <div className="flip-card ">
        <div className="flip-card-inner shadow">
          <div className='flip-card-front rounded'>
            <div>
              <p className='my-auto font-weight-bold'><h6 className="display-4 text-primary mb-4">{friend.name}{' '}{friend.lastname}</h6></p>
            </div>
            <hr />
            <div className="my-5">
              <p className='my-auto font-weight-bold'>Phone:<h6 className="display-4">{friend.phone}</h6></p>
              <p className='my-auto font-weight-bold'>E-mail:<h6 className="display-4">{friend.email}</h6></p>
            </div>
          </div>
          {createButtons()}
        </div >
      </div >
    );
  }
}

export default ContactItem;
