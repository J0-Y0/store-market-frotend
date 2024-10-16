import { Box, Button, TextField } from "@mui/material";
import CenteredCard from "../utils/CenteredCard";
import { LoadingButton } from "../utils/Loading";
import { Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../context/auth/hooks/useLogin";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const login = useLogin();

  const { register, handleSubmit } = useForm<FormData>();

  return (
    <CenteredCard
      headerIcon={<Lock />}
      headerText="Sign In"
      headerSubText="Welcome, please sign in to continue"
    >
      <form onSubmit={handleSubmit((data) => login(data.email, data.password))}>
        <TextField
          required
          label="Email"
          type="email"
          {...register("email")}
          variant="standard"
          fullWidth
          sx={{ my: 2 }}
        />
        <TextField
          required
          label="Password"
          type="password"
          {...register("password")}
          variant="standard"
          fullWidth
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
