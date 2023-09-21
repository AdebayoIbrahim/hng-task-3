import React, { useState, useContext } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import GalleryContext from "../Context/galleryContext";
import BG from "../assets/b_g.jpg";
const iconStyle = {
  position: "absolute",
  right: "15px",
  top: "16px",
  fill: "white",
  cursor: "pointer",
  fontSize: "20px",
};

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(GalleryContext);
  const [show, setShow] = useState(true);
  //handling submittion
  const [inpVal, setInpval] = useState({});
  const [message, setMessage] = useState("");
  const [bg, Setbg] = useState(false);
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setInpval((values) => ({
      ...values,
      [name]: val,
    }));
  };

  message !== "" &&
    setTimeout(() => {
      setMessage("");
    }, 3000);
  const handleSubmmit = async (e) => {
    e.preventDefault();
    if (!inpVal.username || !inpVal.password) {
      alert("please fill out the form");
      return;
    }
    setLoad(true);
    try {
      await signInWithEmailAndPassword(auth, inpVal.username, inpVal.password);
      console.log("successfull");
      setMessage(`Login Successful `);

      Setbg(true);
      setUser(true);
      navigate("/gallery");
    } catch (err) {
      console.log(err.message);
      setLoad(false);
      setMessage("Invalid Login Cridentials");
      navigate("/");
      setUser(false);
    }
  };

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        background: `url(${BG})`,
        backgroundPosition: "50% 60%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        pt={8}
        pb={8}
        pl={3}
        pr={3}
        sx={{
          background: "transparent",
          textAlign: "center",
          boxShadow: "0 0 1.4em #075b67",
          width: "clamp(200px,350px, 400px)",
          borderRadius: "1rem",
          // border: "6px solid #075b67",
        }}
        component="form"
        name="form-login"
      >
        <Typography color="white" variant="body1" fontSize={20}>
          Gallery-Hub
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
        <Box pt={3} sx={{ position: "relative" }}>
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
          {load ? <div className="roller"></div> : null}
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
            boxShadow: "0 0 .5em rgb(0 0 0 /.4)",
          }}
        >
          {`${message} ${bg ? "✓" : "✖"}`}
        </Box>
      )}
    </Stack>
  );
};

export default Login;
