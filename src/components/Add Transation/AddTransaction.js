import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
  //Global Income Context Destructure
  const { addIncome, addExpense } = useContext(GlobalContext);

  // Local Income and Expense States
  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: '',
  });
  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: '',
  });

  // Destructure State variables
  const { incomeText, incomeAmount } = income;
  const { expenseText, expenseAmount } = expense;

  // Change Handlers for Income and Expense Inputs
  const onChangeIncome = (e) => {
    setIncome({
      ...income, //
      [e.target.name]: e.target.value,
    });
  };
  const onChangeExpense = (e) => {
    setExpense({
      ...expense, //
      [e.target.name]: e.target.value,
    });
  };

  // On Submit Handlers For Income and Expense Inputs
  const onSubmitIncome = (e) => {
    e.preventDefault();

    const newIncomeItem = {
      id: uuidv4(),
      incomeText,
      incomeAmount: incomeAmount * 1,
    };
    addIncome(newIncomeItem);
    setIncome({
      incomeAmount: '',
      incomeText: '',
    });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    const newExpenseItem = {
      id: uuidv4(),
      expenseText,
      expenseAmount: expenseAmount * 1,
    };

    addExpense(newExpenseItem);
    setExpense({
      expenseAmount: '',
      expenseText: '',
    });
  };
  return (
    <div className='form-wrapper'>
      <form onSubmit={onSubmitIncome}>
        <div className='input-group income'>
          <input
            type='text'
            placeholder='Add Income'
            value={incomeText}
            name='incomeText'
            autoComplete='off'
            onChange={onChangeIncome}
          />
          <input
            type='number'
            placeholder='Amount'
            value={incomeAmount}
            name='incomeAmount'
            autoComplete='off'
            onChange={onChangeIncome}
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className='input-group expense'>
          <input
            type='text'
            name='expenseText'
            value={expenseText}
            onChange={onChangeExpense}
            placeholder='Add Expense'
            autoComplete='off'
          />
          <input
            type='number'
            name='expenseAmount'
            value={expenseAmount}
            onChange={onChangeExpense}
            placeholder='Amount'
            autoComplete='off'
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
