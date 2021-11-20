import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";

import DescriptionIcon from "@mui/icons-material/Description";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useHistory } from "react-router-dom";
import ok from "../ok.png";

const DrawerComponent = ({ user, handleLogout }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const history = useHistory();

  const handleClick = (item) => {
    history.push(item.path);
    setOpenDrawer(!openDrawer);
  };
  const menuItems = [
    {
      text: "HOME",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "BLOGS",
      icon: <DescriptionIcon />,
      path: "/blogs",
    },
    {
      text: "USERS",
      icon: <PeopleIcon />,
      path: "/users",
    },
  ];
  const login = [
    {
      text: "LOGIN",
      icon: <AccountCircleIcon />,
      path: "/login",
    },
  ];
  const logout = [
    {
      text: "LOGOUT",
      icon: <CloseIcon />,
      path: "/",
    },
  ];
  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "primary.main",
          },
        }}
      >
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                divider={true}
                button
                key={item.text}
                sx={{ color: "common.white" }}
                onClick={() => handleClick(item)}
              >
                <ListItemIcon sx={{ color: `common.white` }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
        <List>
          {!user
            ? login.map((item) => {
                return (
                  <ListItem
                    sx={{ color: `common.white` }}
                    divider={true}
                    button
                    key={item.text}
                    onClick={() => handleClick(item)}
                  >
                    <ListItemIcon sx={{ color: `common.white` }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItem>
                );
              })
            : logout.map((item) => {
                return (
                  <ListItem
                    sx={{ color: `common.white` }}
                    divider={true}
                    key={item.text}
                    button
                    onClick={handleLogout}
                  >
                    <ListItemIcon sx={{ color: `common.white` }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </ListItem>
                );
              })}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: `common.white` }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          anchor="right"
          fontSize="large"
          sx={{ display: { xs: "inline", md: "none" }, width: "48px", mt: 0 }}
        />
      </IconButton>
      {/* {user ? <Avatar alt="OK" src={ok} /> : null} */}
    </>
  );
};

export default DrawerComponent;
