import React from "react";
import Grid from "@mui/material/Grid";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
const Home = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      direction={"row"}
      sx={{
        height: "calc(100vh - 70px)",
        overflowY: "scroll",
        overflowX: "hidden",
        marginTop: "0px",
        position: "relative",
      }}
      spacing={3}
    >
      <Grid
        item
        xs={12}
        sx={{
          padding: "0px !important",
        }}
      >
        <img
          src="./images/IntroPic.jpg"
          style={{
            width: "100%",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <About />
      </Grid>
      <Grid item xs={12}>
        <Services />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
      <div
        style={{
          position: "fixed",
          zIndex: 2,
          background: theme.palette.secondary.main,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: "155px",
          left: "10px",
          cursor: "pointer",
          boxShadow:
            "0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
      >
        <Link
          href="https://wa.me/+18951436199"
          color={"primary"}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            marginTop: "5px",
          }}
          target="_blank"
        >
          <WhatsAppIcon color="primary" />
        </Link>
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 2,
          background: theme.palette.secondary.main,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          bottom: "105px",
          left: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow:
            "0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
      >
        <Link
          href="tel:+18951436199"
          color={"primary"}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            marginTop: "5px",
          }}
        >
          <LocalPhoneRoundedIcon color="primary" />
        </Link>
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: 2,
          background: theme.palette.secondary.main,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: "55px",
          left: "10px",
          cursor: "pointer",
          boxShadow:
            "0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
      >
        <FacebookRoundedIcon color="primary" />
      </div>
      <div
        style={{
          bottom: "5px",
          left: "10px",
          position: "fixed",
          zIndex: 2,
          background: theme.palette.secondary.main,
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow:
            "0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
      >
        <InstagramIcon color="primary" />
      </div>
    </Grid>
  );
};

export default Home;
