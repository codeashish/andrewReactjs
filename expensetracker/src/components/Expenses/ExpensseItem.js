import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";

function ExpensseItem({ title, amount, date }) {
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{amount}</div>
      </Card>
    </li>
  );
}

export default ExpensseItem;
