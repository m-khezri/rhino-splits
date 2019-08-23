import React from 'react';
import './TransactionsItem.scss';
import PropTypes from 'prop-types';
import formatPrice from '../../helpers/formatPrice';
import transactionsShape from '../../helpers/propz/transactionsShape';


class TransactionsItem extends React.Component {
  static propTypes = {
    transaction: transactionsShape,
    paymentSubmitEvent: PropTypes.func,
  }

  render() {
    return (
      <div className='card-holder card bg-light shadow-sm mx-3 my-0 p-1' >
        <div className="d-flex">
          <div className="w-25 text-left">
            <p className="my-auto">{this.props.transaction.date}</p>
          </div>
          <div className="w-50 text-left">
            <p className="my-auto">{this.props.transaction.subject}</p>
          </div>
          <div className="w-25 text-right">
            <p className="my-auto">{formatPrice(this.props.transaction.amount)}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default TransactionsItem;
