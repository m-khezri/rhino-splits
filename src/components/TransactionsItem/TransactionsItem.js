import React from 'react';
import './TransactionsItem.scss';
import formatPrice from '../../helpers/formatPrice';
import transactionsShape from '../../helpers/propz/transactionsShape';
import authRequests from '../../helpers/data/authRequests';
import PropTypes from 'prop-types';

const defaultPayment = {
  date: '',
  subject: '',
  price: 0,
  uid: '',
}

class TransactionsItem extends React.Component {

  static propTypes = {
    transaction: transactionsShape,
    paymentSubmitEvent: PropTypes.func,
  }

  state = {
    transaction: defaultPayment,
  }

  render() {
    const uid = authRequests.getCurrentUid();
    if (this.state.transaction.uid === uid) {
      return (
        <div className='card-holder card bg-light shadow-sm rounded mx-3 my-0 p-1' >
          <div className="d-flex">
            <div className="w-25 text-left">
              <p className="my-auto">{this.state.transaction.date}</p>
            </div>
            <div className="w-50 text-left">
              <p className="my-auto">{this.state.transaction.subject}</p>
            </div>
            <div className="w-25 text-right">
              <p className="my-auto">{formatPrice(this.state.transaction.amount)}</p>
            </div>

          </div>
        </div>
      );
    }
  }
}


export default TransactionsItem;

