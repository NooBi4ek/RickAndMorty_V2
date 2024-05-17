import { Box, Pagination, Stack } from "@mui/material";

import MainLayout from "../layout/MainLayout";
import LocationsInfo from "../components/LocationsInfo";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const GET_ALL_CHARACTERS = gql`
  {
    locations {
      info {
        pages
      }
    }
  }
`;

const Locations = () => {
  const { data } = useQuery(GET_ALL_CHARACTERS);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event: any) => {
    setCurrentPage(event.target.textContent);
  };

  return (
    <>
      <MainLayout>
        <Box>
          <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <LocationsInfo currentPage={currentPage} />
            <Pagination
              count={data?.locations?.info.pages}
              variant="outlined"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Stack>
        </Box>
      </MainLayout>
    </>
  );
};

export default Locations;
