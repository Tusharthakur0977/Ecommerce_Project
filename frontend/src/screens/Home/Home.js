import {
  Box,
  Container,
  Typography,
  useTheme,
  useThemeProps,
} from "@mui/material";
import React, { useContext } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import CircleIcon from "@mui/icons-material/Circle";
import CompoundInterest from "../../components/Interest/CompoundInterest";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductCard from "../../components/utilityComp/product/ProductCard";
import { useStyleHome } from "./HomeStyle";
const Home = () => {
  const classes = useStyleHome();
  const theme = useTheme();
  var items = [
    { name: "banner1.jpg" },
    { name: "banner2.jpg" },
    { name: "banner3.jpg" },
    { name: "banner4.jpg" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0 20px 0",
      }}
    >
      <Carousel
        height="210px"
        interval="3000"
        sx={{ width: "95%", margin: "15px 0", borderRadius: "5px" }}
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        {items.map((item, i) => (
          <img
            key={i}
            src={`../assets/images/banner/${item.name}`}
            height="220px"
            width="100%"
          />
        ))}
      </Carousel>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",

          background: "whitesmoke",
          margin: "0 0 20px 0",
          padding: "20px",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box>
          <Typography variant="h3">New Arrivals</Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur molestias, ab possimus minima ut nulla voluptate quidem
            eum sunt sapiente harum commodi! Veritatis blanditiis harum possimus
            necessitatibus. Corporis recusandae itaque quibusdam eveniet
            pariatur facilis et? Deserunt recusandae earum saepe officiis
            quibusdam animi eveniet quo aperiam, sapiente vel illo a eligendi.
            Numquam reprehenderit, impedit officia molestiae optio nihil
            accusantium atque quidem!
          </Typography>
        </Box>
        <img
          src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/wallpapers/rtx-3090/3090-wallpaper-3840x2160-r1.png"
          className={classes.newImg}
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ width: "100%", padding: "10px", background: "white" }}
        >
          Top Selling Product
        </Typography>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "30px",
            padding: "0 10px",
            rowGap: "70px",
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
