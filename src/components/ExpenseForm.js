import React from "react";
import moment from "moment";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      expenseFilter: props.expense ? props.expense.expenseFilter : "regular",
      error: ""
    };
  }

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = event => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = event => {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (date, dateString) => {
    if (date) {
      this.setState(() => ({ createdAt: date }));
    }
  };

  handleChange = expenseFilter => {
    this.setState(() => ({ expenseFilter }));
  };

  onSubmit = event => {
    event.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "plz provide description or amount" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        expenseFilter: this.state.expenseFilter,
        note: this.state.note
      });
    }
  };
  render() {
    const { expenseFilter } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <DatePicker
          size="large"
          value={this.state.createdAt}
          onChange={this.onDateChange}
        />
        <Select
          defaultValue={expenseFilter}
          onChange={this.handleChange}
          size="large"
        >
          <Option value="oneTime">One Time</Option>
          <Option value="regular">Regular</Option>
        </Select>
        <textarea
          className="text-area"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
