import { CircularProgress, Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <CircularProgress sx={{ color: "#ffb606" }} />
    </Box>
  );
};

export default Spinner;
