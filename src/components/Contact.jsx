import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import getUserDetails from "../data/contactus";
import {
  Input,
  TextareaAutosize,
  Button as BaseButton,
  buttonClasses,
} from "@mui/base";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import Link from "@mui/material/Link";
import Footer from "./Footer";

const blue = {
  100: "#F3E7D6",
  200: "#D9C3A8",
  400: "#B69B6F",
  500: "#A98D4E", // Base color
  600: "#9B7E41",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  text-decoration: none;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `
);
const InputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
  @media (min-width: 600px) {
    width: 450px;
  }

`
);
const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 340px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    outline: 0;
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
  @media (min-width: 600px) {
    width: 470px;
  }
`
);
const Contact = () => {
  const theme = useTheme();
  const location = useLocation();
  const handleTextField = (value) => {};
  return (
    <React.Fragment>
      <Grid container spacing={4} direction={"row"}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" textAlign={"center"}>
                    Reach out to us now! Let's explore the stars together.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                spacing={3}
              >
                {getUserDetails.map(({ name, label, type }, index) => {
                  return (
                    <Grid item>
                      <Grid container direction={"row"}>
                        <Grid item>
                          <Typography variant="subtitle1" fontWeight={"bold"}>
                            {label}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography variant="subtitle1" color={"red"}>
                            *
                          </Typography>
                        </Grid>
                      </Grid>
                      {type ? (
                        <Textarea
                          color="secondary"
                          onChange={handleTextField}
                          name={name}
                          slots={{ input: InputElement }}
                          minRows={3}
                        />
                      ) : (
                        <Input
                          color="secondary"
                          onChange={handleTextField}
                          name={name}
                          slots={{ input: InputElement }}
                        />
                      )}
                    </Grid>
                  );
                })}
                <Grid item>
                  <Button>let's Talk</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginTop: "25px",
            background: theme.palette.background.default,
            paddingBottom: "30px",
          }}
        >
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={11} md={8} lg={6} xl={4}>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                spacing={3}
              >
                <Grid item xs={12}>
                  <Typography
                    color="primary"
                    variant="h4"
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Reach Out to Us for Expert Astrology Guidance
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    color="primary"
                    variant="subtite1"
                    textAlign={"center"}
                  >
                    Have questions about your future? Our expert astrologers are
                    here to help with tarot, numerology, and astrology readings.
                    Contact us today!
                  </Typography>
                </Grid>
                <Grid item>
                  <Button>
                    <Link
                      href="tel:+18951436199"
                      color={"primary"}
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      +1 895-143-6199
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            margin: "20px 0px 50px 0px",
          }}
        >
          <Grid
            container
            spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={8} md={6} lg={4}>
              <iframe
                width="100%"
                height="448"
                loading="lazy"
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBsh6yJba2R7lA-Varqc1qL9--6Xgmdi_w&amp;q=114 E Fordham Rd, Bronx, NY 10468"
                style={{ borderRadius: "15px", border: "0px" }}
              ></iframe>
            </Grid>
            <Grid item xs={11} md={11} lg={6}>
              <Grid
                container
                spacing={3}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={10}>
                  <Typography variant="h4" fontWeight={600}>
                    Discover Something New - Visit Us Today!
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="subtitle2">
                    Are you ready for a unique experience? We invite you to come
                    in and visit us. Our friendly and welcoming team is eager to
                    meet you and introduce you to our world. We promise an
                    environment that is not only comfortable but also engaging.
                    Whether you're looking for a place to relax, learn something
                    new, or just have a good time, we've got you covered. We're
                    more than just a place, we're a community. So why wait? Come
                    in and see us today. We can't wait to welcome you!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {location.pathname !== "/" ? <Footer /> : null}
    </React.Fragment>
  );
};

export default Contact;
