import { Container } from "@mui/material";
import React, { FC } from "react";
import AppBar from "../components/AppBar";

const Template: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container>{children}</Container>
    </>
  );
};

export default Template;
