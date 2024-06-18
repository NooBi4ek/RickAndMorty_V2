import { Avatar, Button, Stack } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import rickAndMorty from "../img/rickandmorty.jpg";
import { getEpisodesData } from "../store/reducers/episodesReducer";
import { openModal } from "../store/actions/episodesAction";
import { EpisodesItem } from "../models/EpisodesItem";
import Modal from "./Modal";
import { WrapperBoxInfo, WrapperStackInfo } from "../ui/UniversalStyles";
import { useState } from "react";

const EpisodesInfo = () => {
  const episodesData = useSelector(getEpisodesData);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleOpen = (id: number) => {
    setOpenPopup(true);
    dispatch(openModal(id));
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <WrapperBoxInfo>
      {episodesData.map((element: EpisodesItem) => (
        <WrapperStackInfo key={element.id}>
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
