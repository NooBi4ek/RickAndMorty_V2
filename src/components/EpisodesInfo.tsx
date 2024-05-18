import { Avatar, Box, Button, Stack } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import rickAndMorty from "../img/rickandmorty.jpg";
import {
  getEpisodesData,
  getOpenModal,
} from "../store/reducers/episodesReducer";
import { closeModal, openModal } from "../store/actions/episodesAction";
import { EpisodesItem } from "../models/EpisodesItem";
import Modal from "./Modal";
import { WrapperBoxInfo, WrapperStackInfo } from "../ui/UniversalStyles";

const EpisodesInfo = () => {
  const episodesData = useSelector(getEpisodesData);
  const openPopup = useSelector(getOpenModal);

  const dispatch = useDispatch();

  const handleOpen = (id: number) => {
    dispatch(openModal(id));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <WrapperBoxInfo>
      {episodesData.map((element: EpisodesItem) => (
        <WrapperStackInfo
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
            <div>Name of episode: {element.name}</div>
            <div>Number of episode: {element.episode}</div>
            <div>Release date: {element.air_date}</div>
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
      {openPopup && <Modal open={openPopup} handleClose={handleClose} />}
    </WrapperBoxInfo>
  );
};

export default EpisodesInfo;
