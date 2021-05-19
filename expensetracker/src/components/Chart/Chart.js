import React from "react";
import "./chart.css";
import { Chartbar } from "./Chartbar";
export const Chart = ({ dataPoints }) => {
  const values = dataPoints.map((ele) => ele.value);
  let max = Math.max(...values);
  return (
    <div className="chart">
      {dataPoints.map((datapoint, index) => (
        <Chartbar
          value={datapoint.value}
          maxValue={max}
          label={datapoint.label}
          key={index}
        />
      ))}
    </div>
  );
};
