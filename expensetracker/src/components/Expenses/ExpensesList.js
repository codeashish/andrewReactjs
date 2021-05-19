import React from "react";
import "./Expenseslist.css";
import ExpensseItem from "./ExpensseItem";

export const ExpensesList = ({ filterArray }) => {

  if (filterArray.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {filterArray.map((expense, index) => {
        return (
          <div key={index}>
            <ExpensseItem
              title={expense.title}
              date={expense.date}
              amount={expense.price}
              key={index}
            />
          </div>
        );
      })}
    </ul>
  );
};
