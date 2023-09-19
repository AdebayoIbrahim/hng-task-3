import React, { useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth, signInWithEmailAndPassword } from "../firebase";

const iconStyle = {
  position: "absolute",
  right: "15px",
  top: "16px",
  fill: "white",
  cursor: "pointer",
  fontSize: "20px",
};
const Login = () => {
  const [show, setShow] = useState(true);
  //handling submittion
  const [inpVal, setInpval] = useState({});
  const [message, setMessage] = useState("");
  const [bg, Setbg] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setInpval((values) => ({
      ...values,
      [name]: val,
    }));
  };

  const handleSubmmit = async (e) => {
    e.preventDefault();
    if (!inpVal.username || !inpVal.password) {
      alert("please fill out the form");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, inpVal.username, inpVal.password);
      console.log("successfull");
      setMessage("Login Successful");
      Setbg(true);
    } catch (err) {
      console.log(err.message);
      setMessage("Invalid Login Cridentials");
    }
  };

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Box
        pt={8}
        pb={8}
        pl={3}
        pr={3}
        sx={{
          background: "transparent",
          textAlign: "center",
          boxShadow: "0 0 1em #0c3035",
          width: "clamp(300px,350px, 450px)",
          borderRadius: "10px",
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
            value={inpVal.username || ""}
            onChange={handleChange}
            name="username"
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
              placeholder="Password"
              name="password"
              id="password"
              type={show ? "password" : "text"}
              className="input"
              value={inpVal.password || ""}
              onChange={handleChange}
              fullWidth
              sx={{
                background: `transparent`,
                borderRadius: ".3rem !important",
              }}
            />
            {show ? (
              <Visibility style={iconStyle} onClick={() => setShow(!show)} />
            ) : (
              <VisibilityOff style={iconStyle} onClick={() => setShow(!show)} />
            )}
          </Box>
        </Stack>
        <Box pt={3}>
          <Button
            type="submit"
            onClick={handleSubmmit}
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
      {message !== "" && (
        <Box
          mt={2}
          p={1}
          sx={{
            background: bg ? "#1d7d1d" : "#ab2222",
            color: "white",
            paddingInline: "2.5rem",
            borderRadius: ".4em",
          }}
        >
          {message}
        </Box>
      )}
    </Stack>
  );
};

export default Login;
