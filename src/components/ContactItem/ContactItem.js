import React from 'react';
import './ContactItem.scss';
import friendsShape from '../../helpers/propz/friendsShape';

class ContactItem extends React.Component {
  static propTypes = {
    friend: friendsShape,
  }

  render() {
    const { friend } = this.props;
    return (
      <div className='bg-light shadow-sm rounded w-100 m-2 p-2'>
        <div className='d-flex flex-wrap'>
          <p className='my-auto mr-4'><b>Name:</b> {friend.name}</p>
          <p className='my-auto mr-4'><b>Last name:</b> {friend.lastname}</p>
          <p className='my-auto mr-4'><b>Phone:</b> {friend.phone}</p>
          <p className='my-auto mr-4'><b>E-mail:</b> {friend.email}</p>
        </div>
      </div>
    );
  }
}

export default ContactItem;
