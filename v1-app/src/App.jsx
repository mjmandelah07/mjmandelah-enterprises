import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";

// Import your pages here
import HomePage from "./pages/Homepage";
import NavBar from "./sections/NavBar";
import Spinner from "./components/Spinner";
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

   if (loading) {
     return <Spinner />;
   }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="quote" element={<GetQuote />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
