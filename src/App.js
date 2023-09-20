import React, { useState } from "react";
import Login from "./components/login";
import { Box } from "@mui/material";
import Gallery from "./Pages/Gallery";
// import { cyan } from "@mui/material/colors";
import { Routes, Route } from "react-router-dom";
import { GalleryContextProvider } from "./Context/galleryContext";
import GalleryContext from "./Context/galleryContext";
import Build from "./shared/Build";

function App() {
  const [build, setBuild] = useState(true);

  //clear-up-build
  setTimeout(() => {
    setBuild(false);
  }, 3000);
  return (
    <GalleryContextProvider>
      <Box sx={{}}>
        {build ? (
          <Build />
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/gallery"
              element={
                <GalleryContext.Consumer>
                  {(context) => <Gallery />}
                </GalleryContext.Consumer>
              }
            />
          </Routes>
        )}
      </Box>
    </GalleryContextProvider>
  );
}

export default App;
