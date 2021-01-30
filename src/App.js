import React from 'react';
import './App.css';
import AddTransaction from './components/Add Transation/AddTransaction';
import Balance from './components/Balance/Balance';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Header from './components/Header/Header';
import IncomeList from './components/IncomeList/IncomeList';
import { GlobalContextProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
