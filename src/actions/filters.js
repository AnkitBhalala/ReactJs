//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

//SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});

export const setSid = sid => ({
  type: "SET_SID",
  sid
});

export const hideExpense = id => ({
  type: "HIDE_EXPENSE",
  id
});

export const showExpense = id => ({
  type: "SHOW_EXPENSE",
  id
});

//SORT_BY_All
export const filterByAll = () => ({
  type: "FILTER_BY_ALL"
});

//SORT_BY_REGULAR_EXPENSE
export const filterByRegular = () => ({
  type: "FILTER_BY_REGULAR"
});

//SORT_BY_ONE_TIME_EXPENSE
export const filterByOneTime = () => ({
  type: "FILTER_BY_ONE_TIME"
});
