import {
  Box,
  Typography,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data for the chart
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const AdminDashboard = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <CssBaseline />

      {/* Dashboard Overview Section */}
      <Box sx={{ mt: 1 }}>
        <Typography variant="h6">Dashboard Overview</Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Card 1: User Statistics */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Users
                </Typography>
                <Typography variant="body2">Total users registered</Typography>
                <Typography variant="h4" color="primary">
                  120
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Card 2: Orders */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Orders
                </Typography>
                <Typography variant="body2">Total orders placed</Typography>
                <Typography variant="h4" color="primary">
                  75
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Card 3: Categories */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Categories
                </Typography>
                <Typography variant="body2">
                  Total categories available
                </Typography>
                <Typography variant="h4" color="primary">
                  10
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Chart Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">User Activity Over Time</Typography>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
