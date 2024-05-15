import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import NavBar from "./sections/NavBar";
// import Contact from "./pages/Contact";
// import GetQuote from "./pages/GetQuote";
// import NoPage from "./pages/NoPage";

function App() {

  
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
