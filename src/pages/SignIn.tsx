import { Box, Button, TextField } from "@mui/material";
import React, { FormEvent } from "react";
import CenteredCard from "../utils/CenteredCard";
import { LoadingButton } from "../utils/Loading";
import { Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserAuth";
import { useForm } from "react-hook-form";

const SignIn = () => {
  interface FormData {
    username: string;
    password: string;
  }
  const { login } = useAuth();

  const { register, handleSubmit } = useForm<FormData>();

  const loginUser = async (event: FormEvent) => {
    event.preventDefault();
    console.log("dsadsa==================");
    login("data.username", "data.password");
    handleSubmit((data) => login(data.username, data.password));
    console.log("========handleSubmit==========");
  };

  return (
    <CenteredCard
      headerIcon={<Lock />}
      headerText="Sign In"
      headerSubText="Welcome, please sign in to continue"
    >
      <form onSubmit={loginUser}>
        <TextField
          label="Email"
          type="email"
          {...register("username")}
          variant="standard"
          fullWidth
          required
          sx={{ my: 2 }}
        />
        <TextField
          label="Password"
          value="yos@sfs.com"
          type="password"
          variant="standard"
          {...register("password")}
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
      </form>
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
