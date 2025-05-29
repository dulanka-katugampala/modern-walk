import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import RoutePaths from "./RoutePaths";
import AppLayout from "../components/common/AppLayout";

const Home = lazy(() => import("../pages/Home"));
const MensClothing = lazy(() => import("../pages/MensClothingPage"));
const WomensClothing = lazy(() => import("../pages/WomensClothingPage"));

const PathRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={RoutePaths.Root}
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path={RoutePaths.MensClothing}
          element={
            <AppLayout>
              <MensClothing />
            </AppLayout>
          }
        />
        <Route
          path={RoutePaths.WomensClothing}
          element={
            <AppLayout>
              <WomensClothing />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
};

export default PathRoutes;
