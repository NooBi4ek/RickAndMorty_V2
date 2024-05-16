import { Avatar, Box, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { getCharactersData } from "../store/reducers/charactersReducer";
import { CharactersItems } from "../models/CharactersItem";

const CharactersInfo = () => {
  const charactersData = useSelector(getCharactersData);

  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "5px",
        padding: "0 10px",
        width: "600px",
      }}
    >
      {charactersData.map((element: CharactersItems) => (
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
        </Stack>
      ))}
    </Box>
  );
};

export default CharactersInfo;
