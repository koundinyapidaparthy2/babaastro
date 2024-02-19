import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import servicesList from "../data/services";
import "../css/services.css";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
const Services = () => {
  const theme = useTheme();
  const location = useLocation();
  const justifyContent = theme.breakpoints.values ? "center" : "start";
  return (
    <React.Fragment>
      <Grid container direction={"row"} spacing={2} justifyContent={"center"}>
        <Grid
          item
          xs={12}
          sx={{
            marginBottom: "20px",
          }}
        >
          <Grid container justifyContent={"center"} spacing={1}>
            <Grid item xs={12}>
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid item>
                  <Typography variant="h4">Our Services</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography>
                We provide a range of services in the Astrologer industry,
                helping individuals navigate their lives with greater clarity
                and purpose.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} md={10} lg={9}>
          <Grid container spacing={2}>
            {servicesList.map(({ src, title, content }) => {
              return (
                <Grid item xs={12} md={12} lg={4}>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        justifyContent: justifyContent,
                      }}
                    >
                      <img src={src} className="listImagesForServices" />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography variant="h6" fontWeight={600}>
                            {title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="subtitle2">{content}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            background: theme.palette.background.default,
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            spacing={4}
            sx={{
              position: "relative",
            }}
            alignItems={"center"}
          >
            <Grid item xs={11} md={6} lg={4}>
              <div className="ourMissionWrapper">
                <img
                  src="https://res.cloudinary.com/dq0gbgsdy/image/upload/c_fill,g_auto,w_384,h_464/assets/Iq3D8ldEZEP.jpg"
                  className="ourMissionImage"
                />
              </div>
            </Grid>
            <Grid
              item
              xs={11}
              md={6}
              lg={8}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              className="OurMissionContent"
            >
              <Grid
                container
                direction={"row"}
                spacing={4}
                alignItems={"center"}
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={1}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <img src="./images/Quotation.png" className="quotes" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h4" color={"primary"}>
                        Our Mission
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={11} lg={7}>
                  <Typography variant="h6" color={"primary"}>
                    We strive to illuminate life's mysteries through Tarot,
                    Numerology, and Astrology. Our mission is to empower
                    individuals with knowledge, fostering growth and
                    self-discovery.
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

export default Services;
