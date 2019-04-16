import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("shuold remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("shuold not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "3",
      description: "water bill",
      amount: 2000,
      note: "",
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should edit an expense", () => {
  const amount = 12030;
  const note = "update";
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    update: {
      amount,
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
  expect(state[1].note).toBe(note);
});

test("should not edit an expense if expense is not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    update: {
      description: "further updated bill",
      amount: 1500,
      note: "",
      createdAt: -1200
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
