import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { useEffect } from "react";

import { Box, Pagination, Stack } from "@mui/material";
import { getCountPages } from "../store/reducers/charactersReducer";
import {
  getCharactersDataServer,
  getPagesCharactersDataServer,
} from "../store/actions/charactersAction";
import CharactersInfo from "../components/CharactersInfo";

const Characters = () => {
  const dispatch = useDispatch();
  const countPage = useSelector(getCountPages);

  const handleChange = (event: any) => {
    dispatch(getCharactersDataServer(event.target.textContent));
  };

  useEffect(() => {
    dispatch(getPagesCharactersDataServer());
    dispatch(getCharactersDataServer("1"));
  }, []);

  return (
    <>
      <MainLayout>
        <Box>
          <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CharactersInfo />
            <Pagination
              count={countPage}
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

export default Characters;
