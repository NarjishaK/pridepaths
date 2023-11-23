import React, { useEffect, useState } from "react";
import axios from "axios";

function ReportsBarChartData() {
  const [growths, setGrowths] = useState({});

  useEffect(() => {
    Growth();
  }, []);

  const Growth = async () => {
    try {
      const response = await axios.get("http://localhost:8000/engagement/growthlist");
      setGrowths(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  const { _id, __v, ...newGrowths } = growths;
  return {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: { label: "Growth", data: Object.values(newGrowths) },
  };
}

export default ReportsBarChartData;
