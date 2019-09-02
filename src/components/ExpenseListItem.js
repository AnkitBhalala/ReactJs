import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

import { Icon } from "antd";

// let color = "";
// const hideExpense = event => {
//   event.preventDefault();
//   color = color ? "" : "green";
//   console.log(color);
// };

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  // console.log("hear");
  // const [name, setName] = useState("DeeDee");
  // console.log(name);
  return (
    <Link className="list-item" to={`/edit?id=${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">
          {moment(createdAt).format("Do MMMM, YYYY")}
        </span>
      </div>
      <div>
        <span className="list-item__data">
          {numeral(amount).format("$0,0.00")}
        </span>
        {/*<Icon
          type="minus-circle"
          style={{ marginLeft: 10, color: color }}
          onClick={hideExpense}
        />
        */}
      </div>
    </Link>
  );
};

export default ExpenseListItem;
