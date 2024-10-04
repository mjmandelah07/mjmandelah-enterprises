import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../assets/styles/components/loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-background">
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loading;
