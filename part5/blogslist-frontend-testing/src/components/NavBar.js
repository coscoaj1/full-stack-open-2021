import React from "react";
import LibraryBooks from "@mui/icons-material/LibraryBooks";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import DrawerComponent from "./DrawerComponent";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import ok from "../ok.png";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export default function NavBar({ user, handleLogout }) {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <>
      <AppBar position="fixed" sx={{ width: "100vw", margin: 0 }}>
        <Toolbar
          component="nav"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: { xs: `none`, md: `flex`, justifyContent: "center" },
            }}
          >
            <Button sx={{ mr: 2 }} size="large" component={Link} to="/">
              <LibraryBooks
                color="secondary"
                sx={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography sx={{ paddingRight: 2, paddingTop: 1 }} variant="h5">
              BlogReviews
            </Typography>

            <Button color="inherit" component={Link} to="/blogs">
              blogs
            </Button>
            <Button
              color="inherit"
              component="div"
              sx={{ flexGrow: 1 }}
              component={Link}
              to="/users"
            >
              users
            </Button>
          </Box>
          <DrawerComponent handleLogout={handleLogout} user={user} />
          {user ? (
            <Toolbar
              sx={{
                display: { xs: `none`, md: `flex` },
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Button color="inherit" size="small" onClick={handleLogout}>
                logout
              </Button>
              <Typography sx={{ paddingBottom: "3px" }}>{user.name}</Typography>
              <Avatar alt="avatar">
                <PersonIcon />
              </Avatar>
            </Toolbar>
          ) : (
            <Button
              sx={{
                display: { xs: `none`, md: `flex` },
              }}
              component={Link}
              color="inherit"
              to="/login"
            >
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
