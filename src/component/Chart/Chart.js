import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const valueDapoints = props.dataPoints.map((s) => s.value);
  const maxValue = Math.max(...valueDapoints);
  return (
    <div className="chart">
      {props.dataPoints.map(function (dataPoint) {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
}

export default Chart;
