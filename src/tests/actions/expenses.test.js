import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense('abc123', { description: "new update", money: 100 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    update: {
      description: "new update",
      money: 100
    }
  });
});

test("should setup add expense action object with provided value", () => {
  const expenseData = {
    description: "texy",
    amount: 200,
    note: "enjoing",
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});