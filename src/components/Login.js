import * as React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import apiLogin from "../api/apiLogin";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setError, changeLoginForm } from "../store/loginSlice";
import Link from "@mui/material/Link";
const Login = () => {
  const dispatch = useDispatch();
  const inputValues = useSelector((s) => s.loginReducer.data);
  const errors = useSelector((s) => s.loginReducer.error);
  const loginWithMobileNo = useSelector(
    (s) => s.loginReducer.loginWithMobileNo
  );
  // React.useEffect(() => {
  //   window.addEventListener("unhandledrejection", (event) => {
  //     console.error("Unhandled promise rejection:", event.reason);
  //   });
  // }, []);
  const getFieldValues = (e) => {
    const value = e.target.value;
    const type = e.target.type;
    if (type === "email") {
      dispatch(setLogin({ data: { ...inputValues, email: value } }));
      if (value !== "") {
        dispatch(setError({ error: { ...errors, email: "" } }));
      } else {
        dispatch(setError({ error: { ...errors, email: "Enter Email" } }));
      }
    } else {
      dispatch(setLogin({ data: { ...inputValues, password: value } }));
      if (value !== "") {
        dispatch(setError({ error: { ...errors, password: "" } }));
      } else {
        dispatch(
          setError({ error: { ...errors, password: "Enter Password" } })
        );
      }
    }
  };
  const loginWithMobile = () => {
    dispatch(changeLoginForm());
  };

  const login = async () => {
    const email = inputValues.email;
    const password = inputValues.password;
    if (email === "") {
      console.log("email" + email);
      dispatch(setError({ error: { ...errors, email: "Enter email" } }));
    }
    if (password === "") {
      dispatch(setError({ error: { ...errors, password: "Enter password" } }));
    }

    try {
      const response = await apiLogin(inputValues.email, inputValues.password);
      console.log(response);
      if (response.status) {
        alert(response.message);
      } else {
        alert("error");
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        margin: "auto",
        marginTop: "5%",
      }}
    >
      <form>
        <Link href="#" underline="hover" onClick={loginWithMobile}>
          {!loginWithMobileNo
            ? `Login with Mobile number?`
            : "Login with email?"}
        </Link>
        {loginWithMobileNo ? (
          <>
            <TextField
              error={errors.email !== ""}
              required
              fullWidth
              sx={{ m: 1 }}
              label="Mobile number"
              id="fullWidth"
              type="number"
              onChange={(e) => getFieldValues(e)}
            />
            <TextField
              error={errors.password !== ""}
              required
              fullWidth
              label="Password"
              id="fullWidth"
              type="password"
              sx={{ m: 1 }}
              onChange={(e) => getFieldValues(e)}
            />

            <Button
              variant="contained"
              onClick={login}
              disabled={errors.email !== "" || errors.password !== ""}
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <TextField
              error={errors.email !== ""}
              required
              fullWidth
              sx={{ m: 1 }}
              label="Email"
              id="fullWidth"
              type="email"
              onChange={(e) => getFieldValues(e)}
            />
            <TextField
              error={errors.password !== ""}
              required
              fullWidth
              label="Password"
              id="fullWidth"
              type="password"
              sx={{ m: 1 }}
              onChange={(e) => getFieldValues(e)}
            />

            <Button
              variant="contained"
              onClick={login}
              disabled={errors.email !== "" || errors.password !== ""}
            >
              Login
            </Button>
          </>
        )}
      </form>
    </Box>
  );
};
export default Login;
