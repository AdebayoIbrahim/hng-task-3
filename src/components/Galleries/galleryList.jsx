import React from "react";
import { Box, Grid, Typography } from "@mui/material";
const GalleryList = ({ item }) => {
  return (
    <Grid
      item
      xl={2}
      lg={3}
      md={4}
      sm={6}
      xs={12}
      sx={{ cursor: "pointer", textAlign: "center" }}
    >
      <Box>
        <img
          src={item.url}
          alt="galllery"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            textAlign: "center !important",
          }}
        />
        <Box>
          <Typography sx={{ textAlign: "left" }}>
            {item.tags.join(", ")}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default GalleryList;
