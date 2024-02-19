import React from "react";
import Grid from "@mui/material/Grid";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
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
    </Grid>
  );
};

export default Home;
