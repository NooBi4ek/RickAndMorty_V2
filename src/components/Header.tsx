import { Box, Stack, Typography } from "@mui/material";
import { PageRoutes, pages } from "../router/types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        marginBottom: "20px",
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
        <Typography
          sx={{
            a: {
              color: "#fff",
              textDecoration: "none",
            },
          }}
        >
          <Link to={pages[PageRoutes.Episodes]()}>Episodes</Link>
        </Typography>
        <Typography
          sx={{
            a: {
              color: "#fff",
              textDecoration: "none",
            },
          }}
        >
          <Link to={pages[PageRoutes.Characters]()}>Characters</Link>
        </Typography>
        <Typography
          sx={{
            a: {
              color: "#fff",
              textDecoration: "none",
            },
          }}
        >
          <Link to={pages[PageRoutes.Location]()}>Location</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Header;
