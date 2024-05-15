import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PageRoutes, pages } from "../router/types";

const Header = () => {
  return (
    <Box>
      <Stack justifyContent="space-between" flexDirection="row">
        <Typography
          sx={{
            a: {
              color: "#000",
              textDecoration: "none",
            },
          }}
        >
          <Link to={pages[PageRoutes.Episodes]()}>Episodes</Link>
        </Typography>
        <Typography
          sx={{
            a: {
              color: "#000",
              textDecoration: "none",
            },
          }}
        >
          <Link to={pages[PageRoutes.Characters]()}>Characters</Link>
        </Typography>
        <Typography
          sx={{
            a: {
              color: "#000",
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
