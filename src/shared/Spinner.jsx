import React from "react";
import spinner from "../assets/ring-norm.gif";
import { Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ margin: "auto", textAlign: "center" }} pt={6}>
      <img
        src={spinner}
        alt="spinner"
        style={{ width: "130px", aspectRatio: "1 /1 ", textAlign: "center" }}
      />
    </Box>
  );
};

export default Spinner;
