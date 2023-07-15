import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
