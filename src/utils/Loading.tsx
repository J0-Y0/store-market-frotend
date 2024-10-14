import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

interface Props {
  width?: number;
  value?: string;
  type?: "button" | "submit" | "reset";
  [key: string]: any; // Allow other props
}

export function LoadingButton({
  width = 100,
  value = "Send",
  type = "button",
  ...others
}: Props) {
  const [loading, setLoading] = React.useState(false); // Example state for loading

  return (
    <Box sx={{ display: "flex", alignItems: "center", width }}>
      <Box sx={{ my: 1, position: "relative", width }}>
        <Button
          variant="contained"
          disabled={loading}
          type={type}
          sx={{ width }}
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
