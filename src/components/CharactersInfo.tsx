import { Avatar, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { getCharactersData } from "../store/reducers/charactersReducer";
import { CharactersItems } from "../models/CharactersItem";
import { WrapperBoxInfo, WrapperStackInfo } from "../ui/UniversalStyles";

const CharactersInfo = () => {
  const charactersData = useSelector(getCharactersData);

  return (
    <WrapperBoxInfo>
      {charactersData.map((element: CharactersItems) => (
        <WrapperStackInfo key={element.id}>
          <Avatar
            src={element.image}
            alt="R&M"
            sx={{ width: "100px", height: "100px" }}
          />
          <Stack flexDirection="column" gap="20px">
            <div>Name: {element.name}</div>
            <div>Status: {element.status}</div>
            <div>Species: {element.species}</div>
            <div>Gender: {element.gender}</div>
            <Stack flexDirection="row"></Stack>
          </Stack>
        </WrapperStackInfo>
      ))}
    </WrapperBoxInfo>
  );
};

export default CharactersInfo;
