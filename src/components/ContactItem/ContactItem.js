import React from 'react';
import './ContactItem.scss';
import PropTypes from 'prop-types';
import friendsShape from '../../helpers/propz/friendsShape';
import authRequests from '../../helpers/data/authRequests';
import { Input } from 'reactstrap';

const defaultContact = {
  name: '',
  lastname: '',
  email: '',
  phoneNum: 0,
  uid: '',
};

class ContactItem extends React.Component {
  static propTypes = {
    friend: friendsShape,
    deleteSingleFriend: PropTypes.func,
    passFriendToEdit: PropTypes.func,
  }

  state = {
    friend: this.props.friend,
    newContact: defaultContact,
  }

  componentWillUpdate(nextProps) {
    if (nextProps.friend !== this.props.friend && nextProps.friend.name) {
      this.setState({ newContact: nextProps.friend.name });
    }
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleFriend, friend } = this.props;
    deleteSingleFriend(friend.id);
  }

  editEvent = (name, e) => {
    console.error('e', e);
    e.preventDefault();
    const tempContact = { ...this.state.newContact };
    tempContact[name] = e.target.value;
    this.setState({ newContact: tempContact });
  }

  firstnamechange = e => this.editEvent('name', e);
  lastnamechange = e => this.editEvent('lastname', e);
  phonechange = e => this.editEvent('phone', e);
  emailchange = e => this.editEvent('email', e);

  render() {
    const taco = this.state.newContact;
    const uid = authRequests.getCurrentUid();

    const createButtons = () => {
      if (this.state.friend.uid === uid) {
        return (
          <div className="flip-card-back rounded">
            <h6 className="text-light">Make a payment, Update or delete contact</h6>
            <Input
              className="my-1"
              type="text"
              id="name"
              placeholder={this.state.friend.name}
              value={taco.name}
              onChange={this.firstnamechange}
            />
            <Input
              className="my-1"
              type="text"
              id="lastname"
              placeholder={this.state.friend.lastname}
              value={taco.lastname}
              onChange={this.lastnamechange}
            />
            <Input
              className="my-1"
              type="text"
              id="phone"
              placeholder={this.state.friend.phone}
              value={taco.phone}
              onChange={this.phonechange}
            />
            <Input
              className="my-1"
              type="text"
              id="email"
              placeholder={this.state.friend.email}
              value={taco.email}
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
              <p className='my-auto font-weight-bold'><h6 className="display-4 text-primary mb-4">{this.state.friend.name}{' '}{this.state.friend.lastname}</h6></p>
            </div>
            <hr />
            <div className="my-5">
              <p className='my-auto font-weight-bold'>Phone:<h6 className="display-4">{this.state.friend.phone}</h6></p>
              <p className='my-auto font-weight-bold'>E-mail:<h6 className="display-4">{this.state.friend.email}</h6></p>
            </div>
          </div>
          {createButtons()}
        </div >
      </div >
    );
  }
}

export default ContactItem;
