import * as React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { apiLogin, apiLoginWithMobile } from "../api/apiLogin";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setError, changeLoginForm } from "../store/loginSlice";
import Link from "@mui/material/Link";
import { CircularProgress } from "@mui/material";
import CustomSnackbar from "./mui/CustomSnackbar";
import Userpage from "./Userpage";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loginSuccess, setloginSuccess] = React.useState({ show: false });
  const [loginSpinner, setLoginSpinner] = React.useState(false);
  const dispatch = useDispatch();
  const inputValues = useSelector((s) => s.loginReducer.data);
  const errors = useSelector((s) => s.loginReducer.error);
  const loginWithMobileNo = useSelector(
    (s) => s.loginReducer.loginWithMobileNo
  );
  const getToast = (type, message, time) => {
    return (
      <CustomSnackbar
        type={type}
        message={message}
        time={time}
      ></CustomSnackbar>
    );
  };
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
    } else if (type === "password") {
      dispatch(setLogin({ data: { ...inputValues, password: value } }));
      if (value !== "") {
        dispatch(setError({ error: { ...errors, password: "" } }));
      } else {
        dispatch(
          setError({ error: { ...errors, password: "Enter Password" } })
        );
      }
    } else {
      dispatch(setLogin({ data: { ...inputValues, mobileNumber: value } }));
      if (value !== "") {
        dispatch(setError({ error: { ...errors, mobileNumber: "" } }));
      } else {
        dispatch(
          setError({
            error: { ...errors, mobileNumber: "Enter Mobile number" },
          })
        );
      }
    }
  };
  const change_login_form = async () => {
    dispatch(changeLoginForm());
  };
  const loginWithMoible = async () => {
    const mobile = inputValues.mobileNumber;
    const password = inputValues.password;
    setLoginSpinner(true);
    const errorMessage = {};
    if (mobile === "") {
      errorMessage.mobileNumber = "Enter MobileNumber";
    }
    if (password === "") {
      errorMessage.password = "Enter Password";
    }
    dispatch(setError({ error: errorMessage }));
    if (mobile !== "" && password !== "") {
      try {
        const response = await apiLoginWithMobile(
          inputValues.mobileNumber,
          inputValues.password
        );
        if (response.status) {
          alert(response.message);
        } else {
          alert("error");
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    setLoginSpinner(false);
  };
  const login = async () => {
    setloginSuccess({ show: false });
    const email = inputValues.email;
    const password = inputValues.password;
    setLoginSpinner(true);
    const errorMessage = {};
    if (email !== "" && password !== "") {
      try {
        const response = await apiLogin(
          inputValues.email,
          inputValues.password
        );
        if (response.status) {
          // localStorage.setItem("token", response.token);
          navigate("/userpage");
        } else {
          setloginSuccess({
            show: true,
            type: "error",
            message: response.message,
          });
        }
      } catch (e) {
        console.error(e.message);
      }
    }
    console.log(loginSuccess);
    setLoginSpinner(false);
    dispatch(
      setError({ error: { email: "", password: "", mobileNumber: "" } })
    );
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
        <Link href="#" underline="hover" onClick={change_login_form}>
          {!loginWithMobileNo
            ? `Login with Mobile number?`
            : "Login with email?"}
        </Link>
        {loginWithMobileNo ? (
          <>
            <TextField
              error={errors.mobileNumber !== ""}
              required
              fullWidth
              sx={{ m: 1 }}
              label="Mobile number"
              id="fullWidth"
              type="number"
              onChange={(e) => getFieldValues(e)}
            />
            {errors.mobileNumber !== ""
              ? getToast("error", errors.mobileNumber, 2000)
              : null}
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
            {errors.password !== ""
              ? getToast("error", errors.password, 2000)
              : null}
            <Button
              variant="contained"
              onClick={loginWithMoible}
              disabled={
                errors.mobileNumber !== "" ||
                errors.password !== "" ||
                loginSpinner
              }
            >
              {!loginSpinner ? (
                "Login"
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress
                    style={{ color: "white" }}
                    size={"1.5rem"}
                  ></CircularProgress>
                </Box>
              )}
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
            {errors.email !== "" ? getToast("error", errors.email, 2000) : null}
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
            {errors.password !== ""
              ? getToast("error", errors.password, 2000)
              : null}
            <Button
              variant="contained"
              onClick={login}
              disabled={
                errors.email !== "" || errors.password !== "" || loginSpinner
              }
            >
              {!loginSpinner ? (
                "Login"
              ) : (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress
                    style={{ color: "white" }}
                    size={"1.5rem"}
                  ></CircularProgress>
                </Box>
              )}
            </Button>
          </>
        )}
        {loginSuccess.show
          ? getToast(loginSuccess.type, loginSuccess.message, 2000)
          : null}
      </form>
    </Box>
  );
};
export default Login;
