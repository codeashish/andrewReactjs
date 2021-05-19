import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ addExpense }) => {
  const [showForm, setshowForm] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: parseInt(Math.random() * 1000 + 1).toString(),
    };
    addExpense(expenseData);
    setshowForm(false);

  };
  const clickhandler = () => {
    setshowForm(true);
  };

  let content = <button onClick={clickhandler}> Add new Expense </button>;
  if (showForm) {
    content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} clickhandler={clickhandler} />;
  }
  return <div className="new-expense">{content}</div>;
};
