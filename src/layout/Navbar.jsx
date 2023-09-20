import React from "react";
import { AppBar, Toolbar, Typography, styled, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const StyledBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "60px !important",
});
const Href = {
  textDecoration: "none",
  color: "white",
  borderRadius: "1em",
};
const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: "99 !important",
        backgroundColor: "transparent",
        padding: ".2em 8%",
        backdropFilter: "blur(6px)",
      }}
    >
      <StyledBar>
        <Stack direction="row" alignItems="center" spacing={5}>
          <Typography
            variant="h1"
            component={Link}
            to="/gallery"
            fontSize={25}
            fontWeight={500}
            style={Href}
          >
            Gallery-Hub
          </Typography>

          <Typography
            style={Href}
            pl={5}
            component={Link}
            fontSize={16}
            to="/faqs"
          >
            How To Use
          </Typography>
        </Stack>
        <Typography
          style={Href}
          component={Link}
          fontSize={18}
          to="/"
          sx={{ border: "2px solid #06444d", padding: "5px 18px" }}
        >
          Sign Out
        </Typography>
      </StyledBar>
    </AppBar>
  );
};

export default Navbar;
