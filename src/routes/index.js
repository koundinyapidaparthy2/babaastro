import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routerList } from "./routes";
import Header from "../components/Header";
const AllRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        {routerList.map(({ Element, path }, index) => {
          return <Route key={path + index} path={path} element={<Element />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
