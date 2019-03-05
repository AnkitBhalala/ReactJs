import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashbordPage = (props) => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}

export default ExpenseDashbordPage;