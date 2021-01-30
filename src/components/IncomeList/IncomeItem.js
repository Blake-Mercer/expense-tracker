import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
const IncomeItem = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext);
  return (
    <li className='transaction'>
      <span className='transaction-text'>{item.incomeText}</span>
      <span className='transaction-amount'>${item.incomeAmount}</span>
      <button className='delete-btn' onClick={() => deleteItem(item.id)}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
};

export default IncomeItem;
