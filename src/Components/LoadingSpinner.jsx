import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingSpinner = () => {
  return (
    <Box sx={{ display: "flex" }} className="loading-spinner">
      <CircularProgress />
    </Box>
  );
};

export default LoadingSpinner;
