// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function ReportTaskChart() {
//   const [tasks, setTasks] = useState({});
//   useEffect(() => {
//     Task();
//   }, []);

//   const Task = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/task/tasklist");
//       setTasks(response.data[0]);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const { _id, __v, ...newTaskes } = tasks;

//   return {
//     tasks: {
//       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//       datasets: {
//         label: "Total Reach",
//         data: Object.values(newTaskes),
//       },
//     },
//   };
// }

// export default ReportTaskChart;
