import React from "react";
import { connect } from "react-redux";
import { Popconfirm, message } from "antd";
import "antd/dist/antd.css";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    const sid = this.props.sid;
    this.props
      .startEditExpense(this.props.expense.id, expense, sid)
      .then(() => message.success("Edit expense sucessfully"))
      .catch(error => message.error("error"));
    this.props.history.push("/");
  };

  onConfirm = () => {
    const sid = this.props.sid;
    this.props
      .startRemoveExpense({ id: this.props.expense.id, sid })
      .then(() => message.success("remove expense successfully"))
      .catch(error => message.error("error"));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <Popconfirm
            title="You want to delete this expense?"
            onConfirm={this.onConfirm}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
          >
            <button className="button button--secondary">Remove Expense</button>
          </Popconfirm>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense, sid) =>
    dispatch(startEditExpense(id, expense, sid)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.location.search.substring(4)
    ),
    sid: state.filters.sid
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
