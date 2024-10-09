import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Import your pages here
import HomePage from "./pages/Homepage";
import NavBar from "./sections/NavBar";
import Menu from "./pages/Menu";
import Specialties from "./pages/Specialties";
import Order from "./pages/Order";
import Spinner from "./components/Spinner";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./assets/styles/components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
// import Contact from "./pages/Contact";
// import GetQuote from "./pages/GetQuote";
// import NoPage from "./pages/NoPage";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffb400",
      },
      secondary: {
        main: "#404044",
      },
    },
    typography: {
      fontFamily: "Mulish, sans-serif",
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<Menu />} />
            <Route path="specialties" element={<Specialties />} />
            <Route path="order" element={<Order />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="quote" element={<GetQuote />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>

          {/* Admin routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            {/* <Route path="categories" element={<Categories />} />
            <Route path="menu" element={<MenuAdmin />} />
            <Route path="orders" element={<Orders />} /> */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
