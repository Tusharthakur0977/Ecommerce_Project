import { makeStyles } from "@mui/styles";

export const useStyleHeader = makeStyles((theme) => ({
  toolBar: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "40px",
    [theme.breakpoints.down("md")]: {
      gap: "0px",
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
    color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
    textDecoration: "none",
  },
}));
