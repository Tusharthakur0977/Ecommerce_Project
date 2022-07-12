import { Backdrop, Box, CircularProgress } from "@mui/material";
import React from "react";
import Cards from "./Card";

const Modal = ({ open, setOpen, handleClose }) => {
  return (
    <Box>
      <Backdrop
        open={open}
        onClick={(e) => {
          handleClose();
          e.stopPropagation();
        }}
      >
        <Cards />
      </Backdrop>
    </Box>
  );
};

export default Modal;
