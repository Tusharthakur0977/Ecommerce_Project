import { Backdrop, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../../../Context/Context";

function LoginModel() {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stifness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  const { loginModel, setLoginModel } = useContext(Context);
  const handleClose = () => {
    setLoginModel(false);
  };
  return (
    <Backdrop
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        background: "#000",
        zIndex: 1,
      }}
      open={loginModel}
      onClick={handleClose}
    >
      <motion.div
        style={{
          width: "50%",
          height: "70%",
          background: "#fdfdfd",
          margin: "auto",
          padding: "0 2rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Typography>HEllo World</Typography>
      </motion.div>
    </Backdrop>
  );
}

export default LoginModel;
