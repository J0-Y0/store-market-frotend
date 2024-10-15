import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Menu, LocalGroceryStore } from "@mui/icons-material";
import { Badge, Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>

            <Typography
              sx={{ fontWeight: "bold", alignItems: "center" }}
              color="inherit"
              component="div"
            >
              <Button
                variant="text"
                href="/"
                sx={{ textTransform: "none", color: "black" }}
              >
                {" "}
                e-market
              </Button>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Carts" arrow>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                {" "}
                <Badge badgeContent={1} color="primary">
                  <LocalGroceryStore />{" "}
                </Badge>
              </IconButton>
            </Tooltip>

            <Button variant="outlined" href="/login">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
