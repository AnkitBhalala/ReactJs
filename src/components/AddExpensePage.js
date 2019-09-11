import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import { message } from "antd";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    const { sid } = this.props;
    this.props
      .startAddExpense(expense, sid)
      .then(() => message.success("Add expense successfully"))
      .catch(error => message.error("error"));
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Add Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: (expense, sid) => dispatch(startAddExpense(expense, sid))
});

const mapstateToprops = state => {
  return {
    sid: state.filters.sid
  };
};

export default connect(
  mapstateToprops,
  mapDispatchToProps
)(AddExpensePage);
