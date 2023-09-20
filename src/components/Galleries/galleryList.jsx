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
      xs={10}
      sx={{ cursor: "pointer", textAlign: "center" }}
    >
      <Box>
        <img
          src={item.url}
          alt="galllery"
          id="gallery"
          style={{
            aspectRatio: "1 / 1",
            objectFit: "cover",
            textAlign: "center !important",
            borderRadius: "8px",
          }}
        />

        <Box>
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            {item.tags.join(", ")}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default GalleryList;
