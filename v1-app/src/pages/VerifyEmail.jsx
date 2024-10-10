import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import Footer from "../sections/Footer";
import bg from "../assets/images/hero/home-banner2.jpg";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the code (assuming a simple example here)
    if (code.length === 6) {
      // Call your API for verification here
      // For demonstration, we'll assume verification is always successful
      setIsVerified(true);
      setErrorMessage(""); // Clear any previous error
    } else {
      setErrorMessage("Please enter a valid 6-digit code.");
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "6rem 1rem",
          boxSizing: "border-box",
          bgcolor: "background.default",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
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
          {/* Show success content if verified, otherwise show input */}
          {isVerified ? (
            <>
              <Typography variant="h6" align="center" gutterBottom>
                Verification Successful!
              </Typography>
              <Typography sx={{ mb: 2 }} align="center">
                Your email has been verified successfully.
              </Typography>
              <Link to="/login" style={{ textDecoration: "none", }}>
                <Button variant="contained" fullWidth>
                  Go to Login
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Typography variant="h5" align="center" gutterBottom>
                Verify Your Email
              </Typography>
              <TextField
                fullWidth
                label="Enter 6-digit code"
                variant="outlined"
                margin="normal"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                error={!!errorMessage}
                helperText={errorMessage}
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Verify
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default VerifyEmail;
