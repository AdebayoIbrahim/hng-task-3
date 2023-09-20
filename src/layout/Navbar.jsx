import React, { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, styled, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import GalleryContext from "../Context/galleryContext";
import { Menu } from "@mui/icons-material";

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
  const [block, setBlock] = useState(false);

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
  const handleDisplay = () => {
    !block && setBlock(true);
  };

  window.addEventListener("click", (e) => {
    const form = document.querySelector(".form");
    const men = document.querySelector(".menu-click");
    if (!form.contains(e.target) && !men.contains(e.target)) {
      if (block === true) setBlock(false);
    }
  });
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
        <Menu
          fontSize="medium"
          className="menu-click"
          sx={{
            display: {
              sm: "block",
              md: "none",
              xs: "block",
              cursor: "pointer",
            },
          }}
          onClick={handleDisplay}
        />
        <Stack
          className="position"
          sx={{
            display: {
              sm: block ? "flex" : "none ",
              md: "flex",
              xs: block ? "flex" : "none ",
            },
            position: { sm: "absolute", md: "unset", xs: "absolute" },
          }}
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="...search by tag"
              value={val}
              className="form"
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
