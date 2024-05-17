import { gql, useQuery } from "@apollo/client";
import { Box, Stack, Avatar, Button } from "@mui/material";
import rickAndMorty from "../img/rickandmorty.jpg";
import { FC, useState } from "react";
import ModalLocation from "./ModalLocation";
const GET_LOCATION_DATA = gql`
  query Location($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        type
        dimension
        residents {
          name
        }
      }
    }
  }
`;

interface ResultsItem {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: {
    name: string;
  };
}

interface Props {
  currentPage: string | number;
}

const LocationsInfo: FC<Props> = ({ currentPage }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState(1);

  const { data } = useQuery(GET_LOCATION_DATA, {
    variables: { page: Number(currentPage) },
  });

  const handleOpen = (id: number) => {
    setOpenModal(true);
    setCurrentId(id);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "5px",
        padding: "0 10px",
        width: "600px",
      }}
    >
      {console.log(currentPage)}
      {data?.locations?.results.map((element: ResultsItem) => (
        <Stack
          sx={{
            flexDirection: "row",
            gap: "20px",
            borderBottom: "1px solid #E0E0E0",
            margin: "20px 10px",
            userSelect: "none",
          }}
          key={element.id}
        >
          <Avatar
            src={rickAndMorty}
            alt="R&M"
            sx={{ width: "100px", height: "100px" }}
          />
          <Stack flexDirection="column" gap="20px">
            <div>Name of location: {element.name}</div>
            <div>Location type: {element.type}</div>
            <div>Location dimension: {element.dimension}</div>
            <Stack flexDirection="row">
              <Button
                onClick={() => {
                  handleOpen(element.id);
                }}
              >
                More info
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
      {openModal && (
        <ModalLocation
          open={openModal}
          currentId={currentId}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
};

export default LocationsInfo;
