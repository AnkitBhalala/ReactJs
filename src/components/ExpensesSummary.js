import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { Popconfirm, message, DatePicker } from "antd";
import "antd/dist/antd.css";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { startRemoveAllExpense } from "../actions/expenses";
import { startAddAllExpenseToStore } from "../actions/expenses";

export class ExpensesSummary extends React.Component {
  state = {
    eomid: ""
  };

  onConfirm = () => {
    this.props
      .startRemoveAllExpense()
      .then(() => {
        message.success("dashbord clear");
      })
      .catch(() => {
        message.error("error");
      });
  };

  onConfirmClone = () => {
    this.props
      .startAddAllExpenseToStore(this.state.eomid)
      .then(() => {
        message.success("expense store to database");
      })
      .catch(error => {
        message.error("error");
      });
  };

  onChange = (date, dateString) => {
    const eomid = moment(`${dateString}-1`).valueOf();
    this.setState(() => ({ eomid }));
  };

  render() {
    const { expenseCount, expensesTotal } = this.props;
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">
            Viewing <span>{expenseCount}</span> {expenseWord} totalling
            <span> {formattedExpensesTotal}</span>
          </h1>
          <div className="page-header__actions flex">
            <Link className="button flex__button" to="/create">
              Add Expense
            </Link>
            <Popconfirm
              title="You want to delete all expense?"
              onConfirm={this.onConfirm}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <button className="button flex__button">Clear Expense</button>
            </Popconfirm>
            <Popconfirm
              title="You want to copy all expense?"
              onConfirm={this.onConfirmClone}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <button className="button flex__button">Clone Expense</button>
            </Popconfirm>
            <DatePicker.MonthPicker
              className="flex__button"
              onChange={this.onChange}
              placeholder="Select month"
              size={"large"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveAllExpense: () => dispatch(startRemoveAllExpense()),
  startAddAllExpenseToStore: eomid => dispatch(startAddAllExpenseToStore(eomid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesSummary);
