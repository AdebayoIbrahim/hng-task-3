import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Spinner from "./Spinner";
const Build = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      mt={25}
      sx={{}}
    >
      <Spinner />
      <Box>
        <Typography
          className="pop"
          variant="body1"
          component="h1"
          color="white"
        >
          Building Up...
        </Typography>
      </Box>
    </Stack>
  );
};

export default Build;
