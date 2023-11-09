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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import React from "react";
import TimelineItem from "examples/Timeline/TimelineItem";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Button } from "@mui/material";

function OrdersOverview() {
  // instagram edit
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Dashboard overview
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp; Edit
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <div onClick={handleClickOpen}>
          <TimelineItem
            color="success"
            icon="notifications"
            title="Instagram "
            dateTime="22 DEC 7:20 PM"
          />
        </div>
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="Engagement Growth"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Meta Audience"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="Total Reach"
          dateTime="20 DEC 2:20 AM"
          lastItem
        />
        {/* <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          lastItem
        /> */}
      </MDBox>
      <div>
        <Dialog open={open} onClose={handleClose}>
          {/* <DialogTitle>Subscribe</DialogTitle> */}
          <DialogContent>
            <DialogContentText>Edit</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Insta Post"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Tota Reel"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="No.Lead"
              type="type"
              fullWidth
              variant="standard"
            />
            <TextField
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
            <Button>Done</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Card>
  );
}

export default OrdersOverview;
