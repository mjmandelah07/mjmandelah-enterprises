import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import loginBg from "../../assets/images/hero/home-banner2.jpg";
import "../../assets/styles/pages/admin/adminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Dummy login check
    if (username === "admin" && password === "password") {
      console.log("Login successful!");
      navigate("/admin-dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Grid container className="admin-login-container">
      {/* Left Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        className="login-image"
        style={{ backgroundImage: `url(${loginBg})` }}
      ></Grid>

      {/* Right Form Section */}
      <Grid item xs={12} md={6} className="login-form-container">
        <Box className="login-form-box">
          <h2 className="login-title">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
              }
              label="Remember Me"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="login-button"
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminLogin;
