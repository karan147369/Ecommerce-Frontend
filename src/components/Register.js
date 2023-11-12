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
const Register = () => {
  const [verifyEmail, setVerifyEmail] = useState(true);
  const submitDetails = (e) => {
    setVerifyEmail(!verifyEmail);
  };
  const [gender, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
                required
                fullWidth
                label="Full Name"
                id="fullWidth"
                type="text"
                sx={{ m: 1 }}
              />
              <TextField
                required
                fullWidth
                sx={{ m: 1 }}
                label="Email"
                id="fullWidth"
                type="email"
              />
              <TextField
                required
                fullWidth
                sx={{ m: 1 }}
                label="Phone Number"
                id="fullWidth"
                type="number"
              />
              <TextField
                required
                fullWidth
                sx={{ m: 1 }}
                label="Password"
                id="fullWidth"
                type="password"
              />
              <TextField
                required
                fullWidth
                sx={{ m: 1 }}
                label="Confirm Password"
                id="fullWidth"
                type="password"
              />
              <TextField
                required
                fullWidth
                sx={{ m: 1 }}
                // label="DOB"
                id="fullWidth"
                type="date"
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
              <Button variant="contained" onClick={(e) => submitDetails(e)}>
                Register
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
