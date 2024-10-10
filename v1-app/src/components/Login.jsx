import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver

// Define the validation schema with Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema), // Integrate Yup validation
  });

  const onSubmit = (data) => {
    console.log("Remember Me:", rememberMe);
    console.log(data); // Handle login logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            required
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            required
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
          />
        )}
      />

      {/* Remember Me checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            color="primary"
          />
        }
        label="Remember Me"
        sx={{ mt: 1 }}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>

      {/* Link to Sign Up */}
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don&apos;t have an account?{" "}
        <Link to="/signup" style={{ textDecoration: "none", color: "#ff9800" }}>
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
