import React from 'react';

import './TransactionsItem.scss';

class TransactionsItem extends React.Component {
  render() {
    const { transaction } = this.props;
    return (
      <div>
        <p>{transaction.date}</p>
        <p>{transaction.subject}</p>
        <p>{transaction.amount}</p>
      </div>
    );
  }
}

export default TransactionsItem;