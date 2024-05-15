import { FC, ReactNode } from "react";
import { Stack } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children?: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Stack minHeight="100vh">
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default MainLayout;
