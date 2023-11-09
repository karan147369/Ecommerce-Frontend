import * as React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  // const [errorStatus, setErrorStatus] = React.useState({
  //   emailError: false,
  //   passwordError: false,
  // });
  // const [loginCredentials, setLoginCredentials] = React.useState({});
  const getFieldValues = (e) => {
    const value = e.target.value;
    const type = e.target.id;
    if (type === "email") {
    } else {
    }
  };
  const login = () => {
    axios
      .get("http://localhost:4000/login")
      .then((res) => {
        alert(res.data.name);
      })
      .catch((e) => console.error(e.message));
  };
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        <form>
          <TextField
            error={false}
            required
            fullWidth
            sx={{ m: 1 }}
            label="Email"
            id="fullWidth email"
            type="email"
            onChange={(e) => getFieldValues(e)}
          />
          <TextField
            error={false}
            required
            fullWidth
            label="Password"
            id="fullWidth password"
            type="password"
            sx={{ m: 1 }}
            onChange={(e) => getFieldValues(e)}
          />

          <Button variant="contained" onClick={login}>
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};
export default Login;
