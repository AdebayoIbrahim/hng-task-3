import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, styled, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import GalleryContext from "../Context/galleryContext";

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
  const { Search } = useContext(GalleryContext);
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (val.trim().length < 1) {
      alert("Input a Value");
      return;
    }
    Search(val);
    setVal("");
  };
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
        <Stack direction="row" alignItems="center" spacing={3}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="...search by tag"
              value={val}
              onChange={handleChange}
            />
          </form>
          <Typography
            style={Href}
            component={Link}
            fontSize={18}
            to="/"
            sx={{ border: "2px solid #06444d", padding: "5px 18px" }}
          >
            Sign Out
          </Typography>
        </Stack>
      </StyledBar>
    </AppBar>
  );
};

export default Navbar;
