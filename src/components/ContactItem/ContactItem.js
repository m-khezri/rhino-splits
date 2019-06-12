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
      <div className='bg-light shadow-sm rounded m-2 p-2'>
        <div className='p-2'>
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
