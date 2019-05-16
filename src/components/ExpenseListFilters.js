import React from "react";
import { connect } from "react-redux";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

const { RangePicker } = DatePicker;

export class ExpenseListFilters extends React.Component {
  onDatesChange = Date => {
    this.props.setStartDate(Date[0]);
    this.props.setEndDate(Date[1]);
  };

  onTextChange = event => {
    this.props.setTextFilter(event.target.value);
  };

  onSortChange = event => {
    if (event.target.value === "date") {
      this.props.sortByDate();
    } else if (event.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div>
            <RangePicker
              value={[this.props.filters.startDate, this.props.filters.endDate]}
              size="large"
              onChange={this.onDatesChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapstateToprops = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: startDate => dispatch(setStartDate(startDate)),
    setEndDate: endDate => dispatch(setEndDate(endDate))
  };
};

export default connect(
  mapstateToprops,
  mapDispatchToProps
)(ExpenseListFilters);
