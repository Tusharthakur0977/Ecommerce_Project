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

function LoginModel() {
  const { loginModel, setLoginModel } = useContext(Context);
  const handleClose = () => {
    setLoginModel(false);
  };
  return <Backdrop open={loginModel} onClick={handleClose}></Backdrop>;
}

export default LoginModel;
