import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "../assets/retrosupply-jLwVAUtLOAQ-unsplash.jpg";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
function Hero({ title, subtitle }) {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: `relative`,
        height: "100vh",
        width: "100vw",
        zIndex: -100,
        mb: 15,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${Image})`,
      }}
    >
      <Grid
        item
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          backgroundColor: "rgba(0,0,0, .6)",
        }}
      />
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ zIndex: 20 }}
      >
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          sx={{
            color: "secondary.main",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          variant="h3"
          align="center"
          color="common.white"
          sx={{
            mb: 10,
          }}
        >
          {subtitle}
        </Typography>
        <Typography component="p" variant="h6" color="secondary" gutterBottom>
          Scroll
        </Typography>
        <ArrowDownward fontSize="large" color="secondary" />
      </Grid>
    </Grid>
  );
}

export default Hero;
