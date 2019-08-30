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
import { setSid } from "../actions/filters";
import {
  startAddAllExpenseToStore,
  startSetExpenses
} from "../actions/expenses";

numeral.register("locale", "in", {
  delimiters: {
    thousands: ",",
    decimal: "."
  },
  currency: {
    symbol: "₹"
  }
});

// switch between locales
numeral.locale("in");

export class ExpensesSummary extends React.Component {
  state = {
    eomid: ""
  };

  componentDidMount() {
    const dateString = moment()
      .toISOString()
      .slice(0, 7)
      .concat("-01");
    const eomid = moment(dateString).valueOf();
    this.setState(() => ({ eomid }));
  }

  onConfirm = () => {
    const sid = this.props.sid;
    this.props
      .startRemoveAllExpense(sid)
      .then(() => message.success("dashbord clear"))
      .catch(() => message.error("error"));
  };

  onConfirmClone = () => {
    this.props
      .startAddAllExpenseToStore(this.state.eomid)
      .then(() => message.success("expense store to database"))
      .catch(error => message.error("error"));
  };

  onChange = (date, dateString) => {
    if (dateString) {
      const eomid = moment(`${dateString}-01`).valueOf();
      this.setState(() => ({ eomid }));
    } else {
      this.componentDidMount();
    }
  };

  onChangeSetData = (date, dateString) => {
    if (dateString) {
      const sid = moment(`${dateString}-01`).valueOf();
      this.props.setSid(sid);
      this.props
        .startSetExpenses(sid)
        .then(() => message.success("new expense set"))
        .catch(error => message.error("error"));
    }
  };

  render() {
    const { expenseCount, expensesTotal } = this.props;
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal).format("0,0.00");

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
            {/* <Popconfirm
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
            </Popconfirm> }
            <DatePicker.MonthPicker
              value={moment(this.state.eomid)}
              className="flex__button"
              onChange={this.onChange}
              size={"large"}
            /> */}
            <DatePicker.MonthPicker
              value={moment(this.props.sid)}
              className="flex__button"
              onChange={this.onChangeSetData}
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
    expensesTotal: selectExpensesTotal(visibleExpenses),
    sid: state.filters.sid
  };
};

const mapDispatchToProps = dispatch => ({
  startRemoveAllExpense: sid => dispatch(startRemoveAllExpense(sid)),
  startAddAllExpenseToStore: eomid =>
    dispatch(startAddAllExpenseToStore(eomid)),
  startSetExpenses: sid => dispatch(startSetExpenses(sid)),
  setSid: sid => dispatch(setSid(sid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesSummary);
