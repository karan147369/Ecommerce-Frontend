import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid } from "@mui/material";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handleSave = () => {
    // Implement your logic to save the edited profile
    console.log("Name:", name);
    console.log("DOB:", dob);
    console.log("Password:", password);
    console.log("Current Password:", currentPassword);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label=""
              variant="outlined"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="New Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Current Password (for verification)"
              variant="outlined"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditProfile;
