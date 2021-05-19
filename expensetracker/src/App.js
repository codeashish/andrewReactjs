import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { NewExpense } from "./components/newExpense/NewExpense";

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setexpenses] = useState(dummy);
  const expenseAdder = (expense) => {
    setexpenses((prev) => [expense, ...prev]);
  };

  return (
    <div>
      <NewExpense addExpense={expenseAdder} />
      <Expenses expenses={expenses} />;
    </div>
  );
}

export default App;
