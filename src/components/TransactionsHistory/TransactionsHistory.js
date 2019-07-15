import React from 'react';
import PropTypes from 'prop-types';
import './TransactionsHistory.scss';
import transactionsShape from '../../helpers/propz/transactionsShape';
import TransactionsItem from '../TransactionsItem/TransactionsItem';

class TransactionHistroy extends React.Component {
  static propTypes = {
    transactions: PropTypes.arrayOf(transactionsShape),
  }

  render() {
    const { transactions } = this.props;
    const transactionItemComponents = transactions.map(transaction => (
      // <h2>hi</h2>
      <TransactionsItem
        transaction={transaction}
        key={transaction.id}
      />
    ));

    return (
      <div className="transaction-container">
        <h5 className="text-info m-3">Transaction history</h5>
        <div className="d-flex bg-dark text-light rounded mx-3 p-1">
          <div className="w-25 text-left">
            <p className="my-auto"><b>Date</b></p>
          </div>

          <div className="w-50 text-left">
            <p className="my-auto"><b>Subject</b></p>
          </div>

          <div className="w-25 text-right">
            <p className="my-auto"><b>Amount</b></p>
          </div>

        </div>
        <div className=''>
          {transactionItemComponents}
        </div>
      </div>

    );
  }
}

export default TransactionHistroy;
