import SelectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test("should filter by text value", () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = SelectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: 200,
    endDate: undefined
  };
  const result = SelectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: 500
  };
  const result = SelectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = SelectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = SelectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});