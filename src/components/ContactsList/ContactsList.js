import React from 'react';
import PropTypes from 'prop-types';
import friendsShape from '../../helpers/propz/friendsShape';
import ContactItem from '../ContactItem/ContactItem';
import './ContactsList.scss';

class ContactsList extends React.Component {
  static propTypes = {
    friends: PropTypes.arrayOf(friendsShape),
  }

  render() {
    const { friends } = this.props;
    const ContactItemComponents = friends.map(friend => (
      <ContactItem
        friend={friend}
        key={friend.id}
      />
    ));
    return (
      <div className="contacts-list-container m-0 p-1">
        <h5 className="text-info ml-2">Contacts list</h5>
        <div className="d-flex flex-wrap">
          {ContactItemComponents}
        </div>
      </div>
    );
  }
}

export default ContactsList;
