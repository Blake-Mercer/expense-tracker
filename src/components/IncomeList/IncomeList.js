import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import IncomeItem from './IncomeItem';

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <div className='transactions transactions-income'>
      <h2>Transaction History</h2>
      <ul className='transaction-list'>
        {incomeTransactions.map((item) => {
          return <IncomeItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default IncomeList;
