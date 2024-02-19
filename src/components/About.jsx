import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import "../css/about.css";
import Footer from "./Footer";

const About = () => {
  const theme = useTheme();
  const location = useLocation();
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        sx={{
          background: theme.palette.background.type1,
          padding: "100px 0px",
        }}
      >
        <Grid item xs={11} md={10} lg={8}>
          <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={4}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="./images/stellar_guidance.jpg"
                className="stellarGuidance"
              />
            </Grid>
            <Grid item xs={12} md={12} lg={7}>
              <Grid container direction={"row"} spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5" fontWeight={600}>
                    Stellar Guidance
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Astrology, tarot, and numerology are ancient practices that
                    have guided countless individuals throughout history. Our
                    experienced astrologer offers these services to help you
                    navigate life's challenges and opportunities. Whether you're
                    seeking insight into your personal life, career, or
                    spiritual journey, our astrologer can provide valuable
                    guidance. With a deep understanding of the stars, numbers,
                    and cards, we can help you make sense of your past, present,
                    and future. Let the cosmos guide you on your unique path.
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

export default About;
