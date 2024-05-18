import {
  Box,
  Button,
  Modal as MuiModal,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEpisodeData,
  getModalCharactersData,
} from "../store/reducers/episodesReducer";
import { getEpisodeCharactersDataServer } from "../store/actions/episodesAction";
import { RootReducer } from "../store/reducers/rootReducer";

interface Props {
  open: boolean;
  handleClose: () => void;
}

interface CharactersData {
  name: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 574,
  maxWidth: "95%",
  bgcolor: "#141414",
  opacity: "1",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Modal: FC<Props> = ({ open, handleClose }) => {
  const episodeData = useSelector(getEpisodeData);
  const charactersData = useSelector(getModalCharactersData);

  const dispatch = useDispatch();

  const [characterEnd, setCharacterEnd] = useState<number>(3);
  const [clickLoadMore, setClickLoadMore] = useState<boolean>(false);

  const handleClick = () => {
    setClickLoadMore((prev) => !prev);
    setCharacterEnd(clickLoadMore ? 3 : charactersData.length);
  };

  useEffect(() => {
    if (episodeData) {
      dispatch(
        getEpisodeCharactersDataServer(
          episodeData.characters.map(
            (el: string) =>
              el.split("https://rickandmortyapi.com/api/character/")[1]
          )
        )
      );
    }
  }, [dispatch, episodeData]);

  if (!episodeData) {
    return null; // or a loading spinner, or some fallback UI
  }

  return (
    <MuiModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack gap="20px" sx={{ userSelect: "none" }}>
          <div>Name of episode: {episodeData.name}</div>
          <div>Number of episode: {episodeData.episode}</div>
          <div>Release date: {episodeData.air_date}</div>
          <div>
            Characters on episode:
            {charactersData
              .slice(0, characterEnd)
              .map((el: CharactersData) => el.name)
              .join(", ")}
          </div>
          <Typography
            onClick={handleClick}
            sx={{ fontWeight: "bold", margin: "10px 0", cursor: "pointer" }}
          >
            {clickLoadMore ? "hide characters" : "load more characters..."}
          </Typography>
        </Stack>
        <Button variant="outlined" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </MuiModal>
  );
};

export default Modal;
