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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useState } from "react";
import axios from "axios";
import { object } from "prop-types";

function Cover() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [invalid, setInvalid] = useState("");

  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    let validationError = {};
    if (!name) {
      validationError.name = "Name is required";
    }
    if (!phone) {
      validationError.phone = "Phone is required";
    }
    if (!email) {
      validationError.email = "Email is required";
    }
    if (!image) {
      validationError.image = "Photo is required";
    }
    if (!password) {
      validationError.password = "password is required";
    }
    if (!location) {
      validationError.location = "Location is required";
    }
    if (!role) {
      validationError.role = "Role is required";
    }
    if (Object.keys(validationError).length > 0) {
      setInvalid(validationError);
      console.log("validation Error:", validationError);
      return;
    }
    const data = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      role: role,
      location: location,
      image: image,
    };
    console.log("sending data", data);
    try {
      const response = await axios.post("http://localhost:8000/admin/adminreg", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("API response:", response.data);
      setInvalid({});
      window.location.href = "/authentication/sign-in";
    } catch (err) {
      console.log("API error:", err);
      setInvalid({ email: "Email already exist" });
    }
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign Up
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              {invalid.name && (
                <p style={{ color: "red", fontSize: "small", fontFamily: "initial" }}>
                  {invalid.name}
                </p>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Role"
                variant="standard"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
              />
              {invalid.role && (
                <p style={{ color: "red", fontSize: "small", fontFamily: "initial" }}>
                  {invalid.role}
                </p>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="number"
                label="Phone"
                variant="standard"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
              />
              {invalid.phone && (
                <p style={{ color: "red", fontSize: "small", fontFamily: "initial" }}>
                  {invalid.phone}
                </p>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              {invalid.email && (
                <p style={{ color: "red", fontSize: "small", fontFamily: "initial" }}>
                  {invalid.email}
                </p>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
              {invalid.password && (
                <p style={{ color: "red", fontSize: "small", fontFamily: "initial" }}>
                  {invalid.password}
                </p>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="file"
                label="Photo"
                variant="standard"
                accept="image/*"
                onChange={handleImage}
                fullWidth
              />
              {invalid.image && (
                <p style={{ color: "red", fontSize: "small", fontFamily: "initial" }}>
                  {invalid.image}
                </p>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Location"
                variant="standard"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
              />
              {invalid.location && (
                <p style={{ color: "red", fontSize: "small", fontFamily: "initial" }}>
                  {invalid.location}
                </p>
              )}
            </MDBox>
            {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleSignup} fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
