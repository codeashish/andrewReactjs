import React, { useState } from "react";
import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
import {ExpensesChart} from "./ExpensesChart";
export default function Expenses({ expenses }) {
  const [year, setyear] = useState("2019");
  let filterArray = expenses.filter(
    (ele) => ele.date.getFullYear().toString() === year
  );

  const yearHandler = (year) => {
    setyear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeyear={yearHandler} />
      <ExpensesChart  filterArray={filterArray}/>
      <ExpensesList filterArray={filterArray} />
    </Card>
  );
}
