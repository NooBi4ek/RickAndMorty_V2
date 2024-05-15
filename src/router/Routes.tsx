import { FC } from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { PageRoutes, pages } from "./types";
import Episodes from "../pages/Episodes";
import Characters from "../pages/Characters";
import Locations from "../pages/Locations";

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="*" element={<Episodes />} />
        <Route path={pages[PageRoutes.Episodes]()} element={<Episodes />} />
        <Route path={pages[PageRoutes.Characters]()} element={<Characters />} />
        <Route path={pages[PageRoutes.Location]()} element={<Locations />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
