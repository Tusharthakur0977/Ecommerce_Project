import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../../Context/Context";

function SearchModal() {
  const { searchModel, setSearchModel } = useContext(Context);
  const handleClose = () => {
    setSearchModel(false);
  };
  return (
    <Backdrop open={searchModel} onClick={handleClose}>
     
    </Backdrop>
  );
}

export default SearchModal;
