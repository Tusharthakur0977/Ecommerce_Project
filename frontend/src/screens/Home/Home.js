import { Container } from "@mui/material";
import React, { useContext } from "react";
import "./Home.css";

import SearchModal from "../../components/Modals/SearchModal";
import CompoundInterest from "../../components/Interest/CompoundInterest";
const Home = () => {
  return (
    <>
      <Container maxWidth="xl" className="banner">
        Home
        {/* <CompoundInterest /> */}
      </Container>
      <SearchModal />
    </>
  );
};

export default Home;
