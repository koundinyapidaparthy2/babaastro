import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import "../css/header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleRoute = (value) => {
    navigate(`/${value}`);
  };
  return (
    <Grid
      container
      sx={{
        height: "70px",
        background: theme.palette.background.default,
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={10} md={8}>
        <Grid container alignItems={"center"}>
          <Grid item>
            <img
              src="./images/Logo.jpeg"
              className="headerLogoImages"
              onClick={() => handleRoute("")}
              sx={{
                cursor: "pointer",
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              fontWeight={600}
              fontSize={15}
              color={"primary"}
              onClick={() => handleRoute("")}
              sx={{
                cursor: "pointer",
              }}
            >
              SIDHU ASTROLOGER
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} md={4}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <Link
              color={"primary"}
              underline="hover"
              onClick={() => handleRoute("about")}
              style={{
                cursor: "pointer",
              }}
            >
              About Us
            </Link>
          </Grid>
          <Grid item>
            <Link
              color={"primary"}
              underline="hover"
              onClick={() => handleRoute("services")}
              style={{
                cursor: "pointer",
              }}
            >
              Services
            </Link>
          </Grid>
          <Grid item>
            <Link
              color={"primary"}
              underline="hover"
              className="finalService"
              onClick={() => handleRoute("contact")}
              style={{
                cursor: "pointer",
              }}
            >
              Contact
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
