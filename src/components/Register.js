import * as React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRegister, setError, setErrorMessage } from "../store/registerSlice";

const Register = () => {
  const [disableButton, setDisableButton] = useState(false);
  const inputValues = useSelector((s) => s.registerReducer.data);
  const errors = useSelector((s) => s.registerReducer.error);
  const errorMessage = useSelector((s) => s.registerReducer.errorMessage);
  const dispatch = useDispatch();
  const [verifyEmail, setVerifyEmail] = useState(true);
  React.useEffect(() => {
    setDisableButton(
      errors.name ||
        errors.email ||
        errors.mobileNumber ||
        errors.password ||
        errors.confirmPassword ||
        errors.dob ||
        errors.gender
    );
    console.log(disableButton);
  }, [
    errors.name,
    errors.email,
    errors.mobileNumber,
    errors.password,
    errors.confirmPassword,
    errors.dob,
    errors.gender,
  ]);
  const submitDetails = (e) => {
    setVerifyEmail(!verifyEmail);
  };
  const [gender, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    dispatch(
      setRegister({ data: { ...inputValues, gender: event.target.value } })
    );
    if (event.target.value === "") {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, gender: "Select Gender" },
        })
      );
      dispatch(setError({ error: { ...errors, gender: true } }));
    } else {
      dispatch(setError({ error: { ...errors, gender: false } }));
      dispatch(
        setErrorMessage({ errorMessage: { ...errorMessage, gender: "" } })
      );
    }

    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const getName = (e) => {
    dispatch(setRegister({ data: { ...inputValues, name: e.target.value } }));
    if (e.target.value === "") {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, name: "Enter name" },
        })
      );
      dispatch(
        setError({
          error: { ...errors, name: true },
        })
      );
    } else {
      dispatch(
        setError({
          error: { ...errors, name: false },
        })
      );
      dispatch(
        setErrorMessage({ errorMessage: { ...errorMessage, name: "" } })
      );
    }
  };
  const getEmail = (e) => {
    dispatch(setRegister({ data: { ...inputValues, email: e.target.value } }));
    if (e.target.value === "") {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, email: "Enter email" },
        })
      );
      dispatch(
        setError({
          error: { ...errors, email: true },
        })
      );
    } else {
      setError({
        error: { ...errors, email: false },
      });
      dispatch(
        setErrorMessage({ errorMessage: { ...errorMessage, email: "" } })
      );
    }
  };
  const getMoblieNo = (e) => {
    dispatch(
      setRegister({ data: { ...inputValues, mobileNumber: e.target.value } })
    );
    if (e.target.value === "") {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, mobileNumber: "Enter email" },
        })
      );
      dispatch(
        setError({
          error: { ...errors, mobileNumber: true },
        })
      );
    } else {
      dispatch(
        setError({
          error: { ...errors, mobileNumber: false },
        })
      );
      dispatch(
        setErrorMessage({ errorMessage: { ...errorMessage, mobileNumber: "" } })
      );
    }
  };
  const getPassword = (e) => {
    dispatch(
      setRegister({ data: { ...inputValues, password: e.target.value } })
    );
    if (e.target.value === "") {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, password: "Enter password" },
        })
      );
      dispatch(
        setError({
          error: { ...errors, password: true },
        })
      );
    } else {
      dispatch(
        setError({
          error: { ...errors, password: false },
        })
      );
      dispatch(
        setErrorMessage({ errorMessage: { ...errorMessage, password: "" } })
      );
    }
  };
  const getConfPassword = (e) => {
    dispatch(
      setRegister({ data: { ...inputValues, confirmPassword: e.target.value } })
    );
    if (e.target.value === "") {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, confirmPassword: "Enter password" },
        })
      );
      dispatch(
        setError({
          error: { ...errors, confirmPassword: true },
        })
      );
    } else {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, confirmPassword: "" },
        })
      );
      setError({
        error: { ...errors, confirmPassword: false },
      });
    }
  };
  const getDob = (e) => {
    const date = Date.now();
    const value = new Date(e.target.value).getTime();
    dispatch(setRegister({ data: { ...inputValues, dob: e.target.value } }));
    if (value >= date - 100000000) {
      dispatch(
        setErrorMessage({
          errorMessage: { ...errorMessage, dob: "Enter valid date" },
        })
      );
      dispatch(setError({ error: { ...errors, dob: true } }));
    } else if (e.target.value === "") {
      dispatch(
        setErrorMessage({ errorMessage: { ...errorMessage, dob: "Enter Dob" } })
      );
      dispatch(setError({ error: { ...errors, dob: true } }));
    } else {
      dispatch(setErrorMessage({ errorMessage: { ...errorMessage, dob: "" } }));
      dispatch(setError({ error: { ...errors, dob: false } }));
    }
  };
  return (
    <>
      <div id="register_container">
        {verifyEmail ? (
          <form>
            <Typography variant="h6">
              Either email or mobile number is required
            </Typography>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                margin: "auto",
              }}
            >
              <TextField
                error={errors.name}
                required
                fullWidth
                label="Full Name"
                id="fullWidth"
                type="text"
                sx={{ m: 1 }}
                onChange={(e) => getName(e)}
              />
              <TextField
                error={errors.email}
                required
                fullWidth
                sx={{ m: 1 }}
                label="Email"
                id="fullWidth"
                type="email"
                onChange={(e) => getEmail(e)}
              />
              <TextField
                error={errors.mobileNumber}
                required
                fullWidth
                sx={{ m: 1 }}
                label="Mobile number"
                id="fullWidth"
                type="number"
                onChange={(e) => getMoblieNo(e)}
              />
              <TextField
                error={errors.password}
                required
                fullWidth
                sx={{ m: 1 }}
                label="Password"
                id="fullWidth"
                type="password"
                onChange={(e) => getPassword(e)}
              />
              <TextField
                error={errors.confirmPassword}
                required
                fullWidth
                sx={{ m: 1 }}
                label="Confirm Password"
                id="fullWidth"
                type="password"
                onChange={(e) => getConfPassword(e)}
              />
              <TextField
                error={errors.dob}
                required
                fullWidth
                sx={{ m: 1 }}
                // label="dob"
                id="fullWidth"
                type="date"
                onChange={(e) => getDob(e)}
              />
              <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Gender
                </InputLabel>
                <Select
                  required
                  fullWidth
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                >
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value={"m"}>Male</MenuItem>
                  <MenuItem value={"f"}>Female</MenuItem>
                  <MenuItem value={"o"}>Other</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                disabled={disableButton}
                onClick={(e) => submitDetails(e)}
              >
                send Otp
              </Button>
            </Box>
          </form>
        ) : (
          <form>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                margin: "auto",
              }}
            >
              <TextField
                required
                fullWidth
                sx={{ m: 1 }}
                label="OTP"
                id="fullWidth"
                type="number"
              />
              <Button variant="contained">Register</Button>
            </Box>
          </form>
        )}
      </div>
    </>
  );
};
export default Register;
