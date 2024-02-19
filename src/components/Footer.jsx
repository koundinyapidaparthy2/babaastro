import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        background: theme.palette.background.default,
        paddingBottom: "30px",
        paddingTop: "10px",
      }}
      spacing={4}
    >
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent={"space-around"}>
          <Grid item xs={12} md={3}>
            <Grid container spacing={1}>
              <Grid item>
                <img src="./images/Logo.jpeg" className="headerLogoImages" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color={"primary"}>
                  Unlock the Mysteries of Your Future with Our Expert Astrology
                  Services
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item>
                    <FacebookRoundedIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <InstagramIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <CallRoundedIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <YouTubeIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  color={"primary"}
                  fontWeight={600}
                >
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color={"primary"}>
                  2464 Grand Concourse, NY 10458
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color={"primary"}>
                  895-143-6199
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  color={"primary"}
                  fontWeight={600}
                >
                  Menu
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color={"primary"}>
                  About
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color={"primary"}>
                  Our Services
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color={"primary"}>
                  Contact Us
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
