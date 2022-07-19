import React, { useState } from "react";
import { Box, Button, Paper, Rating, Tooltip, Typography } from "@mui/material";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useStyleproductCard } from "./ProductStyle";

const ProductCard = () => {
  const classes = useStyleproductCard();
  const [hover, setHover] = useState(false);

  var product =
    "MSI GeForce RTX 3090 Gaming X Trio 24G I 24GB GDDR6X I 384-bit PCI Express Gen 4 Gaming Graphic Card.";
  const navToPrdctPage = () => {};
  return (
    <Paper className={classes.mainCont} elevation={5}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img className={classes.cardImage} src="../assets/images/img1.jpg" />
      </Box>
      <Box className={classes.cardDetails}>
        <Box className={classes.section1}>
          <Typography
            color="secondary"
            variant="body1"
            textAlign="left"
            fontWeight={"bold"}
          >
            <Typography variant="" marginRight="2px" fontWeight={"normal "}>
              Price:
            </Typography>
            2000 $
          </Typography>
          <Rating
            precision={0.5}
            readOnly
            value="4.5"
            size="small"
            name="simple-controlled"
          />
        </Box>

        <Box className={classes.section2}>
          <Typography
            component={Button}
            onClick={navToPrdctPage}
            fontFamily="vedanta"
            borderTop="1px solid grey"
            mb="10px"
            sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left" }}
            fullWidth
            color="secondary"
          >
            {product.length > 20 ? `${product}` : product}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Paper
            component={Button}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            elevation={hover && "7"}
            size="small"
            sx={{
              width: "60%",
              background: "black",
              color: "whitesmoke",
              "&:hover": {
                background: "whitesmoke",
              },
              transition: " .5s ease-in-out",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {hover ? (
                <LocalMallIcon sx={{ fontSize: "20px", color: "black" }} />
              ) : (
                " ADD to Cart"
              )}
            </Box>
          </Paper>
          <Tooltip arrow title="See Full Details">
            <Paper
              component={Button}
              elevation={"6"}
              size="small"
              sx={{
                width: "30%",
                background: "white",
                color: "black",
              }}
            >
              <ArrowForwardIcon />
            </Paper>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductCard;
