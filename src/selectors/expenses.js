import moment from "moment";

//Get visible expenses
export default (
  expenses,
  { text, sortBy, startDate, endDate, hideExpenseID, filterBy }
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const index = hideExpenseID.indexOf(expense.id);
      const hideExpense = index < 0 ? true : false;
      let expenseFilter;
      if (filterBy === "all") {
        expenseFilter = true;
      } else {
        expenseFilter = expense.expenseFilter === filterBy;
      }
      return (
        startDateMatch &&
        endDateMatch &&
        textMatch &&
        hideExpense &&
        expenseFilter
      );
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? -1 : 1;
      }
    });
};
