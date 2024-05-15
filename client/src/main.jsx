import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./index.css";
import App from "./App.jsx";


import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrackVisibility>
      <App />
    </TrackVisibility>
  </React.StrictMode>
);
