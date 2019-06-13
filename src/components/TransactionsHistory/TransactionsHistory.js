import React from 'react';
import './TransactionsHistory.scss';
import transactionsShape from '../../helpers/propz/transactionsShape';

class TransactionHistroy extends React.Component {

  static propTypes = {
    transactions: Proptypes.arrayOf(transactionsShape),
  }

  render() {
    return (
      <div className="transaction-container m0 p-1">
        <p className="text-info">Transaction History</p>


      </div>
    );
  }
}

export default TransactionHistroy;