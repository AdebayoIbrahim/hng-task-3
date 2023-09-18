import React from "react";
import Login from "./components/login";
import { Box } from "@mui/material";
// import { cyan } from "@mui/material/colors";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Box sx={{}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gallery" />
        </Routes>
      </Box>
    </React.Fragment>
  );
}

export default App;
