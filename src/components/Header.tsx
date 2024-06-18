import { Box, Typography } from "@mui/material";
import { PageRoutes, pages } from "../router/types";
import { Link } from "react-router-dom";
import { WrapperNavInfo } from "../ui/UniversalStyles";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D0D0D",
        marginBottom: "20px",
      }}
    >
      <WrapperNavInfo>
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
      </WrapperNavInfo>
    </Box>
  );
};

export default Header;
