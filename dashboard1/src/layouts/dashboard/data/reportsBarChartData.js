import React, { useEffect, useState } from "react";
import axios from "axios";

function ReportsBarChartData() {
  const [growths, setGrowths] = useState([]);

  useEffect(() => {
    Growth();
  }, []);

  const Growth = async () => {
    try {
      const response = await axios.get("http://localhost:8000/engagement/growthlist");
      console.log(response.data, "00000000000");
      setGrowths(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(growths, "growtheeeeeeeee");
  return {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{ label: "Growth", data: growths }],
    // datasets: { label: "Growth", data: [50, 20, 10, 22, 50, 10, 40] },
  };
}

export default ReportsBarChartData;
