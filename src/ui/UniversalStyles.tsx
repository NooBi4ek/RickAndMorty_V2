import { Box, Stack, styled } from "@mui/material";

export const WrapperBoxInfo = styled(Box)`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 0 10px;
  width: 600px;
`;

export const WrapperStackInfo = styled(Stack)`
  flex-direction: row;
  gap: 20px;
  border-bottom: 1px solid #e0e0e0;
  margin: 20px 10px;
  user-select: none;
`;
