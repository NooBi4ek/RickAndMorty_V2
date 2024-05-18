import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";

import { Box, Button, Pagination, Stack, TextField } from "@mui/material";
import {
  getCountPages,
  getSearchValue,
} from "../store/reducers/charactersReducer";
import {
  getCharactersDataServer,
  getPagesCharactersDataServer,
  typeText,
} from "../store/actions/charactersAction";
import CharactersInfo from "../components/CharactersInfo";

const status = [
  { id: 1, status: "Dead" },
  { id: 2, status: "Alive" },
  { id: 3, status: "unknown" },
];
const gender = [
  { id: 1, gender: "Male" },
  { id: 2, gender: "Female" },
];

const Characters = () => {
  const dispatch = useDispatch();
  const countPage = useSelector(getCountPages);
  const text = useSelector(getSearchValue);
  const [checkedStatus, setCheckedStatus] = useState<string>("");
  const [checkedGender, setCheckedGender] = useState<string>("");

  const handleChange = (event: any) => {
    dispatch(
      getCharactersDataServer({
        currentPage: event.target.textContent,
        text,
        status: checkedStatus,
        gender: checkedGender,
      })
    );
  };

  const handleChangeSearch = (e: any) => {
    dispatch(typeText(e.target.value));
  };

  const handleClick = (status: string, gender: string) => {
    setCheckedStatus(status);
    setCheckedGender(gender);
    dispatch(getCharactersDataServer({ countPage, text, status, gender }));
  };

  useEffect(() => {
    dispatch(getPagesCharactersDataServer());
    dispatch(
      getCharactersDataServer({
        currentPage: "1",
        text: "",
        status: "",
        gender: "",
      })
    );
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
            <TextField
              value={text}
              onChange={(e) => {
                handleChangeSearch(e);
              }}
            />
            <Button
              onClick={() => {
                handleClick("", "");
              }}
            >
              Search
            </Button>
            <Stack
              flexDirection="row"
              width="90%"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "5px",
                  padding: "20px",
                }}
              >
                STATUS FILTER:
                {status.map((el) => (
                  <Button
                    key={el.id}
                    onClick={() => {
                      handleClick(el.status, checkedGender);
                    }}
                  >
                    {el.status}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "5px",
                  padding: "20px",
                }}
              >
                GENDER FILTER:
                {gender.map((el) => (
                  <Button
                    key={el.id}
                    onClick={() => {
                      handleClick(checkedStatus, el.gender);
                    }}
                  >
                    {el.gender}
                  </Button>
                ))}
              </Box>
            </Stack>
            <CharactersInfo />

            <Pagination
              count={Number(countPage)}
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
