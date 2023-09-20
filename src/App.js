import React from "react";
import Login from "./components/login";
import { Box, Stack } from "@mui/material";
import Gallery from "./Pages/Gallery";
// import { cyan } from "@mui/material/colors";
import { Routes, Route } from "react-router-dom";
import { GalleryContextProvider } from "./Context/galleryContext";
import GalleryContext from "./Context/galleryContext";

function App() {
  return (
    <GalleryContextProvider>
      <Box sx={{}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/gallery"
            element={
              <GalleryContext.Consumer>
                {(context) => (context.user ? <Gallery /> : <Login />)}
              </GalleryContext.Consumer>
            }
          />
        </Routes>
      </Box>
    </GalleryContextProvider>
  );
}

export default App;
