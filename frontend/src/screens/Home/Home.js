import { Container } from "@mui/material";
import React from "react";
import "./Home.css";
import { useStyleHome } from "./HomeStyle";
import { motion } from "framer-motion";
import Modal from "../../components/utilityComp/Modal/Modal";
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const classes = useStyleHome();
  return (
    <>
      <Container maxWidth="xl" className="banner">

      </Container>
    </>
  );
};

export default Home;
