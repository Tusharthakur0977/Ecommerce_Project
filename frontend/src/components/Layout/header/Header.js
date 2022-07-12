import * as React from "react";
import { Link as Route } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { useStyleHeader } from "./HeaderStyle";
import Darkmodebtn from "../../utilityComp/DarkModebtn/DarkModeBtn";
import { Context } from "../../../Context/Context";
import { useContext } from "react";
import { useState } from "react";

const Header = () => {
  const classes = useStyleHeader();
  const [user, setUser] = useState(false);
  const { loginModel, setLoginModel } = useContext(Context);

  const handleLoginModel = () => {
    setLoginModel(!loginModel);
  };
  const navLinks = [
    { path: "/home", name: "Home" },
    { path: "", name: "About" },
    { path: "", name: "Products" },
    { path: "", name: "Account" },
    { path: "", name: "Account" },
    { path: "", name: "Account" },
  ];
  const settingLinks = [
    { path: "/home", name: "Profile" },
    { path: "", name: "Account" },
    { path: "", name: "Dashboard" },
    { path: "", name: "Logout" },
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

  return (
    <>
      <AppBar
        position="sticky"
        variant="elevation"
        color="transparent"
        enableColorOnDark
      >
        <Container maxWidth="xl">
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
            <img
              src="../assets/images/brandlogo.png"
              alt="shopX"
              height="35px"
              className={classes.logoImg}
            />

            <Box className={classes.headerItems}>
              <Box className={classes.navlinks}>
                {navLinks.map((page, index) => (
                  <Button key={index} className={classes.navlinkBtn}>
                    <Route
                      className={classes.linkBtnItems}
                      to={page.path}
                      sx={{
                        color: "whitesmoke",
                        textDecoration: "none",
                      }}
                    >
                      {page.name}
                    </Route>
                  </Button>
                ))}
              </Box>

              <IconButton
                size="large"
                sx={{
                  mx: 4,
                  justifyContent: "flex-end",
                }}
                onClick={handleLoginModel}
              >
                <SearchIcon />
                {/* <Darkmodebtn /> */}
              </IconButton>
              <Box>
                {user ? (
                  <>
                    <Tooltip title="Profile settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
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
                      {settingLinks.map((setting, index) => (
                        <MenuItem key={index} onClick={handleCloseUserMenu}>
                          <Button size="small" className={classes.navlinkBtn}>
                            <Route
                              className={classes.linkBtnItems}
                              to={setting.path}
                              sx={{
                                color: "whitesmoke",
                                textDecoration: "none",
                              }}
                            >
                              {setting.name}
                            </Route>
                          </Button>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="info"
                    onClick={handleLoginModel}
                  >
                    Log In
                  </Button>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
