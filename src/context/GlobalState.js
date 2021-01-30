import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: 'PayDay', incomeAmount: 3500 },
    { id: 2, incomeText: 'Hooking', incomeAmount: 3500 },
    { id: 3, incomeText: 'Sold Drugs', incomeAmount: 500 },
  ],
  expenseTransactions: [
    { id: 4, expenseText: 'Bought Drugs', expenseAmount: 100 },
    { id: 5, expenseText: 'Rent', expenseAmount: 1200 },
    { id: 6, expenseText: 'Dinner', expenseAmount: 200 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = (incomeItem) => {
    return dispatch({
      type: 'ADD_INCOME',
      payload: incomeItem,
    });
  };
  const addExpense = (expenseItem) => {
    return dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseItem,
    });
  };
  const deleteItem = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteItem,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
