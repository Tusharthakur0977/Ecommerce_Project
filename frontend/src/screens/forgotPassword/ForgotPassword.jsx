import React from "react";
import {
  TextField,
  Box,
  Paper,
  Avatar,
  Grid,
  Typography,
  Button,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { withStyles } from "@mui/styles";
const ForgotPassword = () => {
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

  return (
    <Box
      sx={{
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
          xs={12}
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              color={"primary.contrastText"}
            >
              Password Recovery
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <WithStylesTextField
                margin="normal"
                required
                color="primary"
                size="small"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="outlined"
              />

              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "#000" }}
              >
                Send OTP
              </Button>
              <Grid container>
                <Grid item justify="center">
                  <Typography color={"primary.contrastText"}>
                    Already have an account?{"  "}
                  </Typography>
                  <Link variant="button" href="/login">
                    {"Back To Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPassword;
