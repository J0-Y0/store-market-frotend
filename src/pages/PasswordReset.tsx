import React, { useContext } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { LockReset, RecordVoiceOver, ResetTv } from "@mui/icons-material";
import StyledLink from "../utils/StyledLink";
import { LoadingButton } from "../utils/Loading";
import CenteredCard from "../utils/CenteredCard";
import { Link } from "react-router-dom";
const PasswordReset = () => {
  return (
    <CenteredCard
      headerIcon={<LockReset />}
      headerText="Password Reset"
      headerSubText="Lost your password? No worries! You can recover it by simply providing
          us with the email linked to your account."
    >
      <form onSubmit={(data) => console.log(data)}>
        <Typography></Typography>
        <TextField
          fullWidth
          label="Your Email"
          variant="standard"
          required
          name="email"
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
            value="Reset"
            sx={{ marginY: 2 }}
          />
          <Button component={Link} to="/login">
            Cancel
          </Button>
        </Stack>
      </form>
    </CenteredCard>
  );
};
export default PasswordReset;
