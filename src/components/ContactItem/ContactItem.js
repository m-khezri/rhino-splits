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
    formSubmitEvent: PropTypes.func,
  }

  state = {
    friend: defaultContact,
  }

  componentDidMount() {
    this.setState({ friend: this.props.friend });
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleFriend, friend } = this.props;
    deleteSingleFriend(friend.id);
  }

  changeValue = (x, e) => {
    e.preventDefault();
    const tempContact = { ...this.state.friend };
    tempContact[x] = e.target.value;
    this.setState({ friend: tempContact });
  }

  editEvent = (e) => {
    e.preventDefault();
    const updateEvent = { ...this.state.friend };
    this.props.formSubmitEvent(updateEvent, true);
  }

  firstnamechange = e => this.changeValue('name', e);

  lastnamechange = e => this.changeValue('lastname', e);

  phonechange = e => this.changeValue('phone', e);

  emailchange = e => this.changeValue('email', e);

  render() {
    // const taco = this.state.friend;
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
              value={this.state.friend.name}
              onChange={this.firstnamechange}
            />
            <Input
              className="my-1"
              type="text"
              id="lastname"
              value={this.state.friend.lastname}
              onChange={this.lastnamechange}
            />
            <Input
              className="my-1"
              type="text"
              id="phone"
              value={this.state.friend.phone}
              onChange={this.phonechange}
            />
            <Input
              className="my-1"
              type="text"
              id="email"
              value={this.state.friend.email}
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
