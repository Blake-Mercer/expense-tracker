import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <div className='transactions transactions-expense'>
      <h2>Transaction History</h2>
      <ul className='transaction-list'>
        {expenseTransactions.map((item) => {
          return <ExpenseItem item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
