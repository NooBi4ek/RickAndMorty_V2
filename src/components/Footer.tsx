import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        marginTop: "20px",
      }}
    >
      <Stack
        sx={{
          justifyContent: "center",
          gap: "300px",
          height: "100px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#fff" }}>Created by Maxim Haiduk</Typography>
        <Typography
          sx={{
            a: {
              color: "#fff",
              textDecoration: "none",
            },
          }}
        >
          <Link to="https://github.com/NooBi4ek">My github pages</Link>
        </Typography>
        <Typography
          sx={{
            a: {
              color: "#fff",
              textDecoration: "none",
            },
          }}
        >
          <Link to="https://t.me/StAr_PlatINyM">Contact with me</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
