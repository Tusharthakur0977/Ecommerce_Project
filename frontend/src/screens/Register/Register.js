import React, { useState } from "react";
import {
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
  Paper,
  Avatar,
  Grid,
  Typography,
  Button,
  IconButton,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { withStyles } from "@mui/styles";
const Register = () => {
  const [tooltip, setTooltip] = useState(true);
  const closeTooltip = () => {
    setTooltip(false);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);

  const WithStylesTextField = withStyles({
    root: {
      background: "transparent",
      "& .MuiInputBase-root": {
        borderColor: "white",
      },
      "& .MuiInputLabel-root ": {
        color: "white",
      },
      "& label.Mui-focused": {
        color: "white",
      },
      "& .MuiInputBase-input": {
        // color of typed word
        color: "white",
      },
      "& .MuiInput-underline": {
        borderBottomColor: "white",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "white",
      },

      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
        },
      },
    },
  })(TextField);

  <input type="file" name="myImage" />;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        component="main"
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={11}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          sx={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {selectedImage ? (
              <>
                <Avatar
                  alt="not found"
                  src={URL.createObjectURL(selectedImage)}
                  sx={{ width: 70, height: 70 }}
                />
                <Button size="small" onClick={() => setSelectedImage(null)}>
                  Remove
                </Button>
              </>
            ) : (
              <ClickAwayListener onClickAway={closeTooltip}>
                <Tooltip
                  title="Upload Photo"
                  placement="right"
                  arrow
                  open={tooltip}
                >
                  <IconButton
                    size="large"
                    sx={{ boxShadow: "0px 0px 2px 1px whitesmoke" }}
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                  >
                    <input
                      hidden
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    />

                    <AddAPhotoIcon />
                  </IconButton>
                </Tooltip>
              </ClickAwayListener>
            )}

            <br />
            <Typography
              component="h1"
              sx={{ maginTop: "10px" }}
              variant="h5"
              color={"primary.contrastText"}
            >
              Sign Up
            </Typography>
            <Grid
              item
              xs={12}
              sm={8}
              md={10}
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <WithStylesTextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                size="small"
                name="name"
              />
              <WithStylesTextField
                margin="normal"
                required
                size="small"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <WithStylesTextField
                margin="normal"
                required
                fullWidth
                name="password"
                size="small"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <WithStylesTextField
                margin="normal"
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                size="small"
                type="password"
                id="confirm_password"
              />
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "#000" }}
              >
                Sign UP
              </Button>
              <Grid container>
                <Grid item>
                  <Typography color={"primary.contrastText"}>
                    Already have an account?{"  "}
                    <Link
                      variant="button"
                      href="/login"
                      sx={{
                        transition: "all 0.5s ease-in-out",
                        "&:hover": {},
                      }}
                    >
                      {"LOGIN HERE"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
