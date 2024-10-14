import { Avatar, Box, Paper, Typography } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  headerText: string;
  headerSubText?: string;
  headerIcon?: ReactNode;
}

const CenteredCard = ({
  headerText,
  children,
  headerSubText,
  headerIcon,
}: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      padding="5%"
      sx={{ px: { sm: "20%", md: "30%", lg: "35%" } }}
      alignItems="center"
    >
      <Paper
        sx={{ px: 4, py: 5, display: "block", borderBottom: "2px  solid blue" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Avatar sx={{ bgcolor: blue[500] }}>{headerIcon}</Avatar>
          <Typography
            variant="h6"
            fontWeight={700}
            component="div"
            color={"primary"}
          >
            {headerText}
          </Typography>
          <Typography
            textAlign="center"
            fontWeight={700}
            component="div"
            color={"primary"}
            mb={2}
          >
            {headerSubText}
          </Typography>
        </Box>
        {children}
      </Paper>
    </Box>
  );
};

export default CenteredCard;
