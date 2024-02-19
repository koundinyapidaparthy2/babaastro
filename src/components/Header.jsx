import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import "../css/header.css";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import Divider from "@mui/material/Divider";
const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const smallerScreens = useMediaQuery("(max-width:600px)");
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleRoute = (value) => {
    navigate(`/${value}`);
  };
  const handleDrawer = (value) => {
    setOpenDrawer(value);
  };
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          height: "70px",
          background: theme.palette.background.default,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={10} sm={7} md={8}>
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
        <Grid item xs={2} sm={5} md={4}>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {!smallerScreens ? (
              <React.Fragment>
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
              </React.Fragment>
            ) : (
              <Grid item xs={12}>
                <Grid container justifyContent={"flex-end"}>
                  <Grid item>
                    <MenuRoundedIcon
                      onClick={() => handleDrawer(true)}
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => handleDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Grid item xs={11}>
              <Grid container justifyContent={"flex-end"} alignItems={"center"}>
                <Grid item>
                  <HighlightOffRoundedIcon
                    onClick={() => handleDrawer(false)}
                    sx={{
                      marginRight: "5px",
                      marginTop: "10px",
                      cursor: "pointer",
                      color: theme.palette.background.default,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={11}>
              <Link
                underline="hover"
                onClick={() => handleRoute("about")}
                style={{
                  cursor: "pointer",
                  color: theme.palette.background.default,
                  fontWeight: 600,
                }}
              >
                About Us
              </Link>
              <Divider />
            </Grid>
            <Grid item xs={11}>
              <Link
                underline="hover"
                onClick={() => handleRoute("services")}
                style={{
                  cursor: "pointer",
                  color: theme.palette.background.default,
                  fontWeight: 600,
                }}
              >
                Services
              </Link>
              <Divider />
            </Grid>

            <Grid item xs={11}>
              <Link
                underline="hover"
                className="finalService"
                onClick={() => handleRoute("contact")}
                style={{
                  cursor: "pointer",
                  color: theme.palette.background.default,
                  fontWeight: 600,
                }}
              >
                Contact
              </Link>
              <Divider />
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
