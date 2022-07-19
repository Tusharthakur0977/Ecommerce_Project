import { makeStyles } from "@mui/styles";

export const useStyleproductCard = makeStyles((theme) => ({
  mainCont: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
    gap: "20px",
    width: "300px",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0",
      height: "340px",
      width: "250px",
      borderRadius: "2px",
    },
  },
  cardImage: {
    height: "200px",
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      height: "130px",
      width: "170px",
    },
  },
  cardDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    gap: "10px",
  },
  section1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
