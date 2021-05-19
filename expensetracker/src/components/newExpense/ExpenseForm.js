import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData, clickhandler }) => {
  // const [data, setdata] = useState({
  //   title: "",
  //   price: "",
  //   date: "",
  // });

  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");
  const titleChangeHandler = (e) => {
    settitle(e.target.value);
    // setdata({ ...data, title: e.target.value });
  };

  const priceChangeHandler = (e) => {
    setprice(e.target.value);
    // setdata({ ...data, price: e.target.value });
    // setdata((prev) => ({ ...prev, price: e.target.value }));
  };
  const dateChangehandler = (e) => {
    setdate(e.target.value);
    // setdata({ ...data, date: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title,
      price:+price,
      date: new Date(date),
    };
    onSaveExpenseData(data);
    settitle("");
    setdate("");
    setprice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label> Price</label>
          <input
            type="number"
            min="0.01"
            onChange={priceChangeHandler}
            step="0.01"
            value={price}
          />
        </div>
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="date"
            min="2019-01-01"
            onChange={dateChangehandler}
            max="2022-01-01"
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={clickhandler}>Cancel</button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
