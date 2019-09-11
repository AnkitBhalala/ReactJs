import moment from "moment";

// Filter Reducer
const dateString = moment()
  .toISOString()
  .slice(0, 7)
  .concat("-01");
const sid = moment(dateString).valueOf();

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
  sid: sid,
  hideExpenseID: [],
  filterBy: "all"
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "FILTER_BY_ALL":
      return {
        ...state,
        filterBy: "all"
      };
    case "FILTER_BY_REGULAR":
      return {
        ...state,
        filterBy: "regular"
      };
    case "FILTER_BY_ONE_TIME":
      return {
        ...state,
        filterBy: "oneTime"
      };
    case "SET_SID":
      return {
        ...state,
        sid: action.sid
      };
    case "HIDE_EXPENSE":
      return {
        ...state,
        hideExpenseID: [...state.hideExpenseID, action.id]
      };
    case "SHOW_EXPENSE":
      return {
        ...state,
        hideExpenseID: state.hideExpenseID.filter(
          ExpenseID => ExpenseID !== action.id
        )
      };
    default:
      return state;
  }
};
