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
      <div className="contacts-list-container bg-light m-0 p-1">
        <p className="text-info">Contacts card container</p>
        <p>{ContactItemComponents}</p>
      </div>
    );
  }
}

export default ContactsList;
