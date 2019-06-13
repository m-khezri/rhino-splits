import React from 'react';

import './TransactionsItem.scss';

class TransactionsItem extends React.Component {
  render() {
    const { transaction } = this.props;
    return (
      <div className='card-holder card bg-light shadow-sm rounded mx-3 my-0 p-1'>
        <div className="d-flex">
          <div className="w-25 text-left">
            <p className="my-auto">{transaction.date}</p>
          </div>

          <div className="w-50 text-left">
            <p className="my-auto">{transaction.subject}</p>
          </div>

          <div className="w-25 text-right">
            <p className="my-auto">{transaction.amount}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default TransactionsItem;

