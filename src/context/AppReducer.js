// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        incomeTransactions: [...state.incomeTransactions, action.payload],
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenseTransactions: [...state.expenseTransactions, action.payload],
      };
    case 'DELETE':
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (item) => item.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
