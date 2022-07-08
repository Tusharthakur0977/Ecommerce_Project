import React from "react";
import {
  Box,
  Container,
  IconButton,
  ImageList,
  Link,
  Typography,
} from "@mui/material";
import { Link as Route } from "react-router-dom";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import useStyleFooter from "./FooterStyle";

const Footer = () => {
  const classes = useStyleFooter();
  const socialmedia = [
    { link: "https://www.facebook.com/", icon: <Facebook /> },
    { link: "https://www.youtube.com/", icon: <YouTube /> },
    { link: "https://www.twitter.com/", icon: <Twitter /> },
    { link: "https://www.instagram.com/", icon: <Instagram /> },
  ];
  const navLinks = [
    { path: "/home", name: "Home" },
    { path: "", name: "About" },
    { path: "", name: "Products" },
    { path: "", name: "Account" },
  ];
  return (
    <Container maxWidth="xl" className={classes.mainCont}>
      <Box className={classes.subCont1}>
        <Box className={classes.brandlogofoot}>
          <img src="../assets/images/brandlogo.png" alt="shopX" height="40px" />
        </Box>
        <Box className={classes.DwnlodStore}>
          <Typography color={"#CCCCCC"} variant="h6">
            Download Our App
          </Typography>
          <ImageList>
            <img
              src="../assets/images/Playstore.png"
              alt="PlayStore"
              height="40px"
            />
            <img
              src="../assets/images/AppStore.png"
              alt="AppStore"
              height="40px"
            />
          </ImageList>
        </Box>
      </Box>
      <Box className={classes.subCont2}>
        <Box className={classes.Links}>
          <Typography variant="h6" color={"#CCCCCC"} letterSpacing={4}>
            Links
          </Typography>
          <Box className={classes.linkItems}>
            {navLinks.map((links, index) => {
              return (
                <Route key={index} to={links.path} className={classes.Items}>
                  {links.name}
                </Route>
              );
            })}
          </Box>
        </Box>
        <Box className={classes.aboutus}>
          <Typography variant="h6" color={"#CCCCCC"} letterSpacing={4}>
            About Us
          </Typography>
          <Box className={classes.aboutItems}>
            <Typography variant="caption">Email: shopx000@gmail.com</Typography>
            <Typography variant="caption">Ph No.: +91 8743462873</Typography>
            <Typography variant="caption">
              Address: Sector 22 Chandigarh
            </Typography>
          </Box>
        </Box>
        <Box className={classes.contactus}>
          <Typography variant="h6" color={"#CCCCCC"} letterSpacing={4}>
            Contact Us
          </Typography>
          <Box className={classes.contactItems}>
            <Typography variant="caption">Email: shopx000@gmail.com</Typography>
            <Typography variant="caption">Ph No.: +91 8743462873</Typography>
            <Typography variant="caption">
              Address: Sector 22 Chandigarh
            </Typography>
          </Box>
        </Box>
        <Box className={classes.socialicons}>
          <Typography variant="h6" color={"#CCCCCC"} letterSpacing={3}>
            Social Handles
          </Typography>
          <Box className={classes.socialItems}>
            {socialmedia.map((item, index) => {
              return (
                <Link key={index} href={item.link} className={classes.SItems}>
                  <IconButton color="primary">{item.icon}</IconButton>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box className={classes.subCont3}>
        <Typography>&copy; 2022 Brand Name |All Rights Reserved </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
