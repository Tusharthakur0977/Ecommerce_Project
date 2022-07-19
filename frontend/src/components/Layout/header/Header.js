import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { useStyleHeader } from "./HeaderStyle";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ClickAwayListener, useTheme } from "@mui/material";
const Header = () => {
  const classes = useStyleHeader();
  const theme = useTheme();
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const handleLoginModel = () => {
    navigate("/login");
  };
  const navLinks = [
    { path: "/", name: "Men" },
    { path: "", name: "Women" },
    { path: "", name: "Mobile" },
    { path: "", name: "Laptops" },
    { path: "", name: "Electronic" },
    { path: "", name: "Daily Needs" },
  ];
  const loggedINSetting = [
    { path: "/", name: "Profile" },
    { path: "", name: "Account" },
    { path: "", name: "Dashboard" },
    { path: "", name: "Logout" },
  ];
  const LoggedOutSetting = [
    { path: "/login", name: "Log IN" },
    { path: "/register", name: "Sign UP" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="sticky"
        variant="elevation"
        color="primary"
        enableColorOnDark
      >
        <Toolbar disableGutters className={classes.toolBar}>
          <Box className={classes.burgernavlink}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navLinks.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box>
            <img
              src="../assets/images/brandlogo.png"
              alt="shopX"
              height="35px"
              className={classes.logoImg}
            />
          </Box>
          <Box className={classes.navlinks}>
            {navLinks.map((page, index) => (
              <Button
                key={index}
                component={Link}
                className={classes.navlinkBtn}
                to={page.path}
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* <IconButton
                size="large"
                sx={{
                  mx: 4,
                  justifyContent: "flex-end",
                }}
                onClick={handleLoginModel}
              >
                <SearchIcon />
                 <Darkmodebtn /> 
              </IconButton> */}
          <Box>
            <Tooltip title="Account settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Typography variant="caption" color={"secondary"}>
                      {user}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <AccountCircleIcon fontSize="large" color="secondary" />
                    <Typography variant="caption" color={"secondary"}>
                      Account
                    </Typography>
                  </Box>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "55px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user
                ? loggedINSetting.map((setting, index) => (
                    <MenuItem
                      sx={{ padding: "5px 10px" }}
                      key={index}
                      onClick={handleCloseUserMenu}
                    >
                      <Button
                        sx={{
                          color: "black",
                          "&:hover": {
                            color:
                              theme.palette.mode === "dark"
                                ? "black"
                                : "whitesmoke",
                            background: "black",
                          },
                        }}
                        component={Link}
                        className={classes.proflieItems}
                        to={setting.path}
                      >
                        {setting.name}
                      </Button>
                    </MenuItem>
                  ))
                : LoggedOutSetting.map((setting, index) => (
                    <MenuItem
                      sx={{ padding: "5px 10px" }}
                      key={index}
                      onClick={handleCloseUserMenu}
                    >
                      <Button
                        sx={{
                          color: "black",
                          "&:hover": {
                            color:
                              theme.palette.mode === "dark"
                                ? "black"
                                : "whitesmoke",
                            background: "black",
                          },
                        }}
                        component={Link}
                        className={classes.proflieItems}
                        to={setting.path}
                      >
                        {setting.name}
                      </Button>
                    </MenuItem>
                  ))}
            </Menu>
            {/* <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      fontSize: "10px",
                      width: "25px",
                      padding: "10px 0px",
                      "&:hover": {
                        background: "#000",
                        color: "whitesmoke",
                      },
                    }}
                  >
                    Log IN
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      fontSize: "10px",
                      width: "25px",
                      padding: "10px 0px",
                      "&:hover": {
                        background: "#000",
                        color: "whitesmoke",
                      },
                    }}
                  >
                    Sign IN
                  </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
