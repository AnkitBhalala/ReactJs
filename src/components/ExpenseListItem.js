import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import { Icon } from "antd";

import { hideExpense, showExpense } from "../actions/filters";

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  hideExpense,
  showExpense
}) => {
  let [color, setColor] = useState();

  const showHideExpense = event => {
    event.preventDefault();
    color = color ? "" : "green";
    setColor(color);
    color ? hideExpense(id) : showExpense(id);
  };

  return (
    <Link className="list-item" to={`/edit?id=${id}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__sub-title">
            {moment(createdAt).format("Do MMMM, YYYY")}
          </span>
          <h3 className="list-item__data">
            {numeral(amount).format("$0,0.00")}
          </h3>
        </div>
        <Icon
          type="minus-circle"
          style={{ marginLeft: 10, color: color, fontSize: 25 }}
          onClick={showHideExpense}
        />
      </div>
    </Link>
  );
};

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  hideExpense: id => dispatch(hideExpense(id)),
  showExpense: id => dispatch(showExpense(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListItem);
