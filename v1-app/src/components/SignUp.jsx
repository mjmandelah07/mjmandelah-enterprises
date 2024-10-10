import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Define the validation schema with Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username cannot exceed 20 characters"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle sign-up logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Controller
        name="username"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            required
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
          />
        )}
      />
      <Controller
        name="firstName"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label="First Name"
            variant="outlined"
            margin="normal"
            required
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            fullWidth
            label="Last Name"
            variant="outlined"
            margin="normal"
            required
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : ""}
          />
        )}
      />
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
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>

      {/* Link to Login */}
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <Link to="/login" style={{ textDecoration: "none", color: "#ff9800" }}>
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
