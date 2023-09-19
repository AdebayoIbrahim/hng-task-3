import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Navbar from "../layout/Navbar";
import { Images } from "../data/images";
import GalleryList from "../components/Galleries/galleryList";
const Gallery = () => {
  return (
    <Box sx={{ color: "white", textAlign: "center" }}>
      <Navbar />
      <Box>
        <Typography component="h1" pt={4} fontSize={25} fontWeight={500}>
          Welcome To Gallery-Hub
        </Typography>
      </Box>
      <Box sx={{ paddingInline: "8%" }} pt={7}>
        <Grid container spacing={2}>
          {Images.map((image, index) => {
            return <GalleryList item={image} key={index} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Gallery;
