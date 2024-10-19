import React, { useState } from "react";
import { Button, LinearProgress, Stack, TextField } from "@mui/material";
import { LockReset } from "@mui/icons-material";
import { LoadingButton } from "../utils/Loading";
import CenteredCard from "../utils/CenteredCard";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/authProvider";
import useReset from "../context/auth/hooks/useReset";

const PasswordReset = () => {
  const { loading } = useAuth();
  const { resetPassword } = useReset();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    resetPassword(email);
  };

  return (
    <CenteredCard
      headerIcon={<LockReset />}
      headerText="Password Reset"
      headerSubText="Lost your password? No worries! Just provide the email linked to your account."
    >
      {loading && <LinearProgress />}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Email"
          variant="standard"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <LoadingButton
            startIcon={<LockReset />}
            type="submit"
            sx={{ marginY: 2 }}
          >
            Reset
          </LoadingButton>
          <Button component={Link} to="/login">
            Cancel
          </Button>
        </Stack>
      </form>
    </CenteredCard>
  );
};

export default PasswordReset;
