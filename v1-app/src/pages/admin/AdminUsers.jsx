import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "../../components/Pagination"; // Import the Pagination component

const AdminUsers = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      verified: true,
      ordersCount: 5,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      verified: false,
      ordersCount: 3,
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      verified: true,
      ordersCount: 8,
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      verified: true,
      ordersCount: 12,
    },
    {
      id: 5,
      firstName: "Carol",
      lastName: "Taylor",
      verified: false,
      ordersCount: 1,
    },
    // Add more users as needed
  ];

  const [page, setPage] = useState(1);
  const rowsPerPage = 3; // Set number of rows per page

  const handleEdit = (userId) => {
    console.log("Edit user with ID:", userId);
    // Implement edit functionality here
  };

  const handleDelete = (userId) => {
    console.log("Delete user with ID:", userId);
    // Implement delete functionality here
  };

  // Calculate the total number of users and the users to display for the current page
  const totalUsers = users.length;
  const displayedUsers = users.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

     // Function to handle page change and scroll to top
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0); // Scroll to the top of the page
    };
    
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="subtitle1" gutterBottom>
        Total Users: {totalUsers}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Verified</TableCell>
              <TableCell>Orders Count</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.verified ? "Yes" : "No"}</TableCell>
                <TableCell>{user.ordersCount}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Component */}
      <Pagination
        count={Math.ceil(totalUsers / rowsPerPage)} // Total number of pages
        page={page}
        onChange={handlePageChange} // Update the current page
      />
    </Box>
  );
};

export default AdminUsers;
