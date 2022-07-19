import { makeStyles } from "@mui/styles";

export const useStyleHeader = makeStyles((theme) => ({
  toolBar: {
    flex: 1,
    padding: "3px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    [theme.breakpoints.down("md")]: {
      gap: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "0px",
      padding: "0px 10px",
    },
  },
  logoImg: {
    display: "flex",
    mr: 1,
    padding: "10px",
    background: theme.palette.mode === "dark" ? "white" : "",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  headerItems: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  burgernavlink: {
    flex: 0.1,
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  navlinks: {
    flex: 0.6,
    mx: "2rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  navlinkBtn: {
    my: 2,
    display: "block",
  },

  linkBtnItems: {
    fontWeight: "bolder",
    fontSize: "12px",
    color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.mode === "dark" ? "black" : "whitesmoke",
      background:"black"
    },
  },

  
}));
