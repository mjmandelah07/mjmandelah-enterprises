import { useState, useEffect } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Footer from "../sections/Footer";
import bg from "../assets/images/hero/home-banner2.jpg";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get initial tab based on the location.pathname (login or signup)
  const [activeTab, setActiveTab] = useState(
    location.pathname === "/signup" ? 1 : 0
  );

  // Sync activeTab with the route whenever location.pathname changes
  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveTab(0); // Set activeTab to Login
    } else if (location.pathname === "/signup") {
      setActiveTab(1); // Set activeTab to Sign Up
    }
  }, [location.pathname]); // Run effect when location.pathname changes

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 0) {
      navigate("/login"); // Go to login route
    } else {
      navigate("/signup"); // Go to signup route
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
          padding: "6rem 1rem",
          boxSizing: "border-box",
          bgcolor: "background.default",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover", //
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            boxShadow: 3,
            borderRadius: 2,
            p: 3,
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Welcome to Our Platform
          </Typography>

          {/* Tabs for Login and Sign Up */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" />
            <Tab label="Sign Up" />
          </Tabs>

          {/* Conditionally render Login or SignUp component based on activeTab */}
          <Box sx={{ mt: 3 }}>
            {activeTab === 0 && <Login />} {/* Show Login Form */}
            {activeTab === 1 && <SignUp />} {/* Show Sign Up Form */}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AuthPage;
