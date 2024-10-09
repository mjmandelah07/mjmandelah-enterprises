import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Toolbar,
  AppBar,
  CssBaseline,
  Button,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Dashboard,
  People,
  Category,
  RestaurantMenu,
  ShoppingCart,
  ExitToApp,
  Public,
  Menu as MenuIcon, // Importing the Menu icon for mobile
} from "@mui/icons-material";
import { useState } from "react";

const drawerWidth = 240;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  // State to manage the drawer open/close
  const [openDrawer, setOpenDrawer] = useState(false);

  // Navigation links
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
    { text: "Users", icon: <People />, path: "/admin/users" },
    { text: "Categories", icon: <Category />, path: "/admin/categories" },
    { text: "Menu", icon: <RestaurantMenu />, path: "/admin/menu" },
    { text: "Orders", icon: <ShoppingCart />, path: "/admin/orders" },
    { text: "Log out", icon: <ExitToApp />, path: "/admin/login" },
  ];

  // Function to get the title based on the current path
  const getTitle = () => {
    switch (location.pathname) {
      case "/admin/dashboard":
        return "Admin Dashboard";
      case "/admin/users":
        return "Users";
      case "/admin/categories":
        return "Categories";
      case "/admin/menu":
        return "Menu";
      case "/admin/orders":
        return "Orders";
      default:
        return "Admin Dashboard";
    }
  };

  const handleDrawerToggle = () => {
    setOpenDrawer((prevOpen) => !prevOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar for top header */}
      <AppBar
        position="fixed"
        sx={{
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`, // Full width on mobile
          ml: isMobile ? 0 : `${drawerWidth}px`, // No left margin on mobile
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            {getTitle()} {/* Dynamically render the title */}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for side navigation */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isMobile ? "temporary" : "permanent"} // Use temporary drawer on mobile
        anchor="left"
        open={isMobile ? openDrawer : true} // Control open state based on screen size
        onClose={handleDrawerToggle} // Close drawer on mobile
      >
   
        <Typography variant="h6" sx={{height: "64px", p: 3}}>Hello MjMandelah</Typography>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                onClick={() => {
                  navigate(item.path);
                  if (isMobile) handleDrawerToggle(); // Close drawer on mobile when navigating
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box sx={{ mt: "auto", p: 2 }}>
          {/* Visit Site Button */}
          <Button
            variant="contained"
            fullWidth
            color="primary"
            startIcon={<Public />}
            onClick={() => window.open("/", "_blank")} // Open main site in new tab
          >
            Visit Site
          </Button>
        </Box>
      </Drawer>

      {/* Main content area where the Outlet renders the current page */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />{" "}
        {/* This is where child components (dashboard, users, etc.) will be rendered */}
      </Box>
    </Box>
  );
};

export default AdminLayout;
