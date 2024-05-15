import { styled } from "@mui/material";
import { Pagination as MuiPagination } from "@mui/material";
import { FC } from "react";

interface Props {
  count: number;
  variant: "outlined";
  onChange: () => void;
}

const Pagination: FC<Props> = ({ count, variant, onChange }) => {
  return (
    <StyledPagination count={count} variant={variant} onChange={onChange} />
  );
};

export default Pagination;

const StyledPagination = styled(MuiPagination)({
  margin: "0 auto",

  ".MuiPaginationItem-root": {
    color: "#000",
    borderRadius: "1px solid #fff",
  },
  ".MuiPagination-ul": {
    justifyContent: "center",
  },
});
