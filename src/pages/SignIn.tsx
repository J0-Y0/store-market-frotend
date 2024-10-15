import { Box, Button, TextField } from "@mui/material";
import React from "react";
import CenteredCard from "../utils/CenteredCard";
import { LoadingButton } from "../utils/Loading";
import { Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <CenteredCard
      headerIcon={<Lock />}
      headerText="Sign In"
      headerSubText="Welcome, please sign in to continue"
    >
      <TextField
        label="Email"
        type="email"
        variant="standard"
        fullWidth
        required
        sx={{ my: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="standard"
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <LoadingButton
        variant="outlined"
        value="Sign in"
        type="submit"
        width="100%"
      />
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        alignItems="center"
        width="100%"
      >
        <Button variant="text" component={Link} to="/signup">
          Create account?
        </Button>
        <Button variant="text" component={Link} to="/PasswordReset">
          Forgot Password?
        </Button>
      </Box>
    </CenteredCard>
  );
};

export default SignIn;
