import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import { useAuth } from "../context/auth/authProvider";
interface Props {
  width?: String;
  value?: string;
  variant?: "contained" | "text" | "outlined";
  type?: "button" | "submit" | "reset";
  [key: string]: any; // Allow other props
}

export function LoadingButton({
  width = "auto",
  value = "Send",
  type = "button",
  variant = "contained",

  ...others
}: Props) {
  const { loading } = useAuth();

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: `${width}` }}>
      <Box sx={{ my: 1, position: "relative", width: `${width}` }}>
        <Button
          disabled={loading}
          type={type}
          sx={{ width: `${width}` }}
          variant={variant}
          {...others}
        >
          {value}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
