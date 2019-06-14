import React from 'react';
import './ContactItem.scss';
import friendsShape from '../../helpers/propz/friendsShape';
import authRequests from '../../helpers/data/authRequests';

class ContactItem extends React.Component {
  static propTypes = {
    friend: friendsShape,
  }

  render() {
    const { friend } = this.props;
    const uid = authRequests.getCurrentUid();

    const createButtons = () => {
      if (friend.uid === uid) {
        return (
          <div>
            <button className="btn btn-default">
              YES
            </button>
          </div>
        );
      }
      return <span>NO!!</span>;
    };


    return (
      <div className='card-holder card w-100 bg-light shadow-sm rounded m-2 p-2'>
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
