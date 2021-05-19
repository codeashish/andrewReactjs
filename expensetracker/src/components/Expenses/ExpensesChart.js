import React from "react";
import { Chart } from "./../Chart/Chart";

export const ExpensesChart = ({filterArray}) => {
  const datapoints = [
    { label: "Jan", value: 0 },

    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const ele of filterArray) {
    const month = ele.date.getMonth();
    datapoints[month].value += ele.price;
  }

  return <Chart dataPoints={datapoints} />;
};
