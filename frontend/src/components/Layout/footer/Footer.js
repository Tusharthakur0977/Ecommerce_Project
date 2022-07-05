import React from "react";
import { Box, Container, Typography } from "@mui/material";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import useStyleFooter from "./FooterStyle";

const Footer = () => {
  return (
    <Container className="mainCont">
      <Box className="lefCont">
        Download Our App
        <Typography>Download App for Android and IOS mobile phone</Typography>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </Box>
      <Box className="middleCont">
        <Typography>ECOMMERCE.</Typography>
        <Typography>High Quality is our first priority</Typography>
        <Typography>Copyrights 2021 &copy; MeAbhiSingh</Typography>
      </Box>
      <Box className="rightCont">
        <Typography>Follow Us</Typography>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </Box>
    </Container>
  );
};

export default Footer;
