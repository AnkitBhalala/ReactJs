import moment from "moment";

// Filter Reducer
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const dateString = `${year}-${month}-1`;
const sid = moment(dateString).valueOf();

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
  sid: sid
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
    case "SET_SID":
      return {
        ...state,
        sid: action.sid
      };
    default:
      return state;
  }
};
