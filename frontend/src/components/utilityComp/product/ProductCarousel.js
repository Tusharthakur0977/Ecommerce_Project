import React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircleIcon from "@mui/icons-material/Circle";

const ProductCarousel = () => {
  var items = [
    { path: "../assets/images/img1.jpg" },
    { path: "../assets/images/img2.jpg" },
    { path: "../assets/images/img3.jpg" },
  ];
  return (
    <Carousel
      height="200px"
      navButtonsAlwaysInvisible
      interval="3000"
      indicatorIconButtonProps={{
        style: {
          padding: "0 2px",
          color: "grey",
        },
      }}
      IndicatorIcon={<CircleIcon sx={{ fontSize: "8px" }} />}
      activeIndicatorIconButtonProps={{
        style: {
          color: "black", // 3
        },
      }}
    >
      {items.map((item, i) => (
        <img key={i} src={item.path} />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
