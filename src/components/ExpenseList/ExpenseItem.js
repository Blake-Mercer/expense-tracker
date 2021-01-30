import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
const ExpenseItem = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext);
  return (
    <li className='transaction'>
      <span className='transaction-text'>{item.expenseText}</span>
      <span className='transaction-amount'>${item.expenseAmount}</span>
      <button className='delete-btn' onClick={() => deleteItem(item.id)}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
};

export default ExpenseItem;
