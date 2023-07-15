import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddRroduct from "../page/AddRroduct";
import HommePage from "../page/HommePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HommePage />} />
        <Route path="/add" element={<AddRroduct />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
