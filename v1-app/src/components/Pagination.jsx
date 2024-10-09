import { Pagination as MuiPagination, Stack } from "@mui/material";
import PropTypes from "prop-types";

const Pagination = ({ count, page, onChange }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ mt: 3 }}
    >
      <MuiPagination
        variant="outlined"
        count={count} // Total number of pages
        page={page} // Current page
        onChange={onChange} // Function to handle page change
        color="primary"
      />
    </Stack>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired, // Total number of pages
  page: PropTypes.number.isRequired, // Current page
  onChange: PropTypes.func.isRequired, // Function to handle page change
};

export default Pagination;
