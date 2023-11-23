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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import React from "react";
import TimelineItem from "examples/Timeline/TimelineItem";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Instagram } from "@mui/icons-material";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData();
  // instagram list
  const [reel, setReel] = useState("");
  const [reach, setReach] = useState("");
  const [lead, setLead] = useState("");
  const [post, setPost] = useState("");
  const [selectedData, setSelectedData] = useState("");
  const [instagram, setInstagram] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Insta();
  }, []);
  const Insta = async () => {
    try {
      const response = await axios.get("http://localhost:8000/insta/instalist");
      console.log(response.data);
      setInstagram(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // instagram edit
  const [open, setOpen] = React.useState(false);

  const handleEdit = () => {
    const selectedData = instagram.find((instadetails) => instadetails._id);
    setSelectedData(selectedData);
    setLead(selectedData.lead);
    setPost(selectedData.post);
    setReach(selectedData.reach);
    setReel(selectedData.reel);
    handleClickOpen();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //insta update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const requestData = { lead, reach, reel, post };
    try {
      const response = await axios.put(
        `http://localhost:8000/insta/updateinsta/${id}`,
        requestData
      );
      console.log(response.data);
      if (response.status == "200") {
        navigate("/profile");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {instagram.map((instadetails) => (
          <Grid container spacing={3} key={instadetails._id}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="No.Posts"
                  count={instadetails.post}
                  percentage={{
                    color: "success",
                    amount: "+55% than last week",
                    label: (
                      <>
                        {/* <AiFillEdit onClick={() => handleClickOpen(instadetails._id)} /> */}
                        <AiFillEdit onClick={() => handleEdit(instadetails._id)} />
                      </>
                    ),
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="Total Reel"
                  count={instadetails.reel}
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="store"
                  title="No.Lead"
                  count={instadetails.lead}
                  percentage={{
                    color: "success",
                    amount: "+1%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="person_add"
                  title="Insta Reach"
                  count={instadetails.reach}
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "Just updated",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        ))}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Engagement Growth"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData()}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Meta Audience"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Total Reach"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
      <div>
        <Dialog open={open} onClose={handleClose}>
          {/* <DialogTitle>Subscribe</DialogTitle> */}
          <DialogContent>
            <DialogContentText>Edit</DialogContentText>
            <TextField
              onChange={(e) => setPost(e.target.value)}
              value={post}
              autoFocus
              margin="dense"
              id="name"
              label="Insta Post"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={(e) => setReel(e.target.value)}
              value={reel}
              autoFocus
              margin="dense"
              id="name"
              label="Tota Reel"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={(e) => setLead(e.target.value)}
              value={lead}
              autoFocus
              margin="dense"
              id="name"
              label="No.Lead"
              type="type"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={(e) => setReach(e.target.value)}
              value={reach}
              autoFocus
              margin="dense"
              id="name"
              label="Insta Reach"
              type="type"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUpdate}>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
