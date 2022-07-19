import { makeStyles } from "@mui/styles";

export const useStyleHome = makeStyles((theme) => ({
  mainCont: {},
  newImg: {
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "340px",
      width: "100%",
    },
  },
}));
