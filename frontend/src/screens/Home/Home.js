import { Container } from "@mui/material";
import React, { useContext } from "react";
import "./Home.css";
import { useStyleHome } from "./HomeStyle";
import { motion } from "framer-motion";
import SearchModal from "../../components/Modals/SearchModal";
const Home = () => {
  return (
    <>
      <Container maxWidth="xl" className="banner">
        Home
      </Container>
      <SearchModal />
    </>
  );
};

export default Home;
