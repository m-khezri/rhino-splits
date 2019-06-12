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
      <div>
        <p>friend.name</p>
        <p>friend.lastname</p>
        <p>friend.phone</p>
        <p>friend.email</p>
      </div>
    );
  }
}

export default ContactItem;
