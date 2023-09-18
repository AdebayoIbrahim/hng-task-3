import React, { useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth } from "../firebase";

const Login = () => {
  const [show, setShow] = useState(true);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box
        p={3}
        sx={{
          background: "transparent",
          textAlign: "center",
          width: "clamp(300px,350px, 450px)",
        }}
        component="form"
      >
        <Typography color="white" variant="body1" fontSize={20}>
          G-HUB
        </Typography>
        <Stack spacing={3} pt={4} className="text">
          <TextField
            mt={2}
            variant="outlined"
            placeholder="Username"
            id="input"
            className="input"
            InputProps={{}}
            sx={{
              background: `transparent`,
              borderRadius: ".3rem !important",
            }}
          />
          <Box sx={{ position: "relative" }}>
            <TextField
              mt={2}
              variant="outlined"
              placeholder="password"
              id="password"
              type="password"
              className="input"
              fullWidth
              sx={{
                background: `transparent`,
                borderRadius: ".3rem !important",
              }}
            />
            {show ? (
              <Visibility
                sx={{
                  position: "absolute",
                  right: "15px",
                  top: "16px",
                  fill: "white",
                  cursor: "pointer",
                }}
                onClick={() => setShow(!show)}
              />
            ) : (
              <VisibilityOff
                sx={{
                  position: "absolute",
                  right: "15px",
                  top: "16px",
                  fill: "white",
                  cursor: "pointer",
                }}
                onClick={() => setShow(!show)}
              />
            )}
          </Box>
        </Stack>
        <Box pt={3}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "8px",
              background: "#0c4047",
              paddingBlock: ".8em",
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
