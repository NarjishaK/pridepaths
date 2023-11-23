import axios from "axios";
import { useEffect, useState } from "react";

/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
function ReportsLineChart() {
  const [sales, setSales] = useState({});
  // const [tasks, setTasks] = useState({});
  useEffect(() => {
    Sale();
    // Task();
  }, []);

  const Sale = async () => {
    try {
      const response = await axios.get("http://localhost:8000/sales/saleslist");
      setSales(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  const { _id, __v, ...newSaleses } = sales;

  //sales
  // const Task = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/task/tasklist");
  //     setTasks(response.data[0]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const { _id, __v, ...newTaskes } = tasks;

  return {
    sales: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: {
        label: "Meta Audience",
        data: Object.values(newSaleses),
      },
    },
    tasks: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: {
        label: "Total Reach",
        data: [50, 40, 300, 50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
    },
  };
}

export default ReportsLineChart;
