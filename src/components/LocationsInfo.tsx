import { gql, useQuery } from "@apollo/client";
import { Box, Stack, Avatar, Button } from "@mui/material";
import rickAndMorty from "../img/rickandmorty.jpg";
import { FC, useState } from "react";
import ModalLocation from "./ModalLocation";
import { WrapperBoxInfo, WrapperStackInfo } from "../ui/UniversalStyles";

const GET_LOCATION_DATA = gql`
  query Locations($page: Int) {
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

  const { data, loading, error } = useQuery(GET_LOCATION_DATA, {
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
    <>
      {loading && <div>Loading info...</div>}
      {error && <div>Error</div>}
      <WrapperBoxInfo>
        {data?.locations?.results.map((element: ResultsItem) => (
          <WrapperStackInfo key={element.id}>
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
          </WrapperStackInfo>
        ))}
        {openModal && (
          <ModalLocation
            open={openModal}
            currentId={currentId}
            handleClose={handleClose}
          />
        )}
      </WrapperBoxInfo>
    </>
  );
};

export default LocationsInfo;
