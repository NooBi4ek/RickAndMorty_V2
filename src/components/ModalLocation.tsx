import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Modal as MuiModal,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
  currentId: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 574,
  maxHeight: "70%",
  overflowY: "scroll",
  maxWidth: "95%",
  bgcolor: "#141414",
  opacity: "1",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const GET_LOCATION_DATA = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        name
      }
    }
  }
`;

const ModalLocation: FC<Props> = ({ open, handleClose, currentId }) => {
  const [residentsEnd, setResidentsEnd] = useState(3);
  const [clickLoadMore, setClickLoadMore] = useState(false);
  const { data } = useQuery(GET_LOCATION_DATA, {
    variables: { id: currentId },
  });

  const handleClick = () => {
    setClickLoadMore((prev) => !prev);
    setResidentsEnd(data?.location.residents.length);
    if (clickLoadMore === true) {
      setResidentsEnd(3);
    }
  };

  return (
    <MuiModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack gap="20px" sx={{ userSelect: "none" }}>
          <div>Name location: {data?.location.name}</div>
          <div>Location type: {data?.location.type}</div>
          <div>Location dimension: {data?.location.dimension}</div>
          <div>
            Characters on episode:
            {data?.location.residents
              .slice(0, residentsEnd)
              .map((el: { name: any }) => el.name)
              .join(", ")}
          </div>
        </Stack>
        <Typography
          onClick={handleClick}
          sx={{ fontWeight: "bold", margin: "10px 0", cursor: "pointer" }}
        >
          {clickLoadMore ? "hide characters" : "load more characters..."}
        </Typography>
        <Button variant="outlined" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </MuiModal>
  );
};

export default ModalLocation;
