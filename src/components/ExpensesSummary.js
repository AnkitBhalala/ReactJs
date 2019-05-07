import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import "antd/dist/antd.css";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { startRemoveAllExpense } from "../actions/expenses";

export const ExpensesSummary = ({
  expenseCount,
  expensesTotal,
  startRemoveAllExpense
}) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");

  const onConfirm = () => {
    startRemoveAllExpense();
  };

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling
          <span> {formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
          <Popconfirm
            title="You want to delete all expense?"
            onConfirm={onConfirm}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <button className="button" style={{ marginLeft: "10px" }}>
              Clear Expense
            </button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveAllExpense: () => dispatch(startRemoveAllExpense())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesSummary);
