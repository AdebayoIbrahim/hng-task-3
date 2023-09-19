import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../layout/Navbar";
const Gallery = () => {
  return (
    <Box sx={{ color: "white", textAlign: "center" }}>
      <Navbar />
      <Box>
        <Typography component="h1" pt={4} fontSize={25} fontWeight={500}>
          Welcome To Gallery-Hub
        </Typography>
      </Box>
    </Box>
  );
};

export default Gallery;
