import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {
  const { expenseTransactions, incomeTransactions } = useContext(GlobalContext);

  const incomeAmount = incomeTransactions.map((income) => income.incomeAmount);
  const expenseAmount = expenseTransactions.map(
    (expense) => expense.expenseAmount
  );

  const totalIncome = incomeAmount.reduce((acc, curr) => {
    return (acc += curr);
  });

  const totalExpenses = expenseAmount.reduce((acc, curr) => {
    return (acc += curr);
  });

  const totalBalance = (totalIncome + totalExpenses).toLocaleString();

  return (
    <div className='balance'>
      <h2>Your Balance</h2>
      <h3>${totalBalance}</h3>
      <div className='income-expense'>
        <div className='plus'>
          <h3>Income</h3>
          <p>+${totalIncome.toLocaleString()}</p>
        </div>
        <div className='minus'>
          <h3>Expenses</h3>
          <p>-${totalExpenses.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
