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
      <TransactionsItem
        transaction={transaction}
        key={transaction.id}
      />
    ));

    return (
      <div className="transaction-container m0 p-1">
        <p className="text-info">Transaction History</p>
        <h2>{transactionItemComponents}</h2>

      </div>
    );
  }
}

export default TransactionHistroy;