import React from "react";
import styles from "./Chart.module.css";
import { convertData } from "../../helpers/convertData";
import { useState } from "react";
import { CartesianGrid, ResponsiveContainer } from "recharts";
import { LineChart } from "recharts";
function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={convertData(chart, type)}>
              <CartesianGrid stroke="#404042"></CartesianGrid>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Chart;
