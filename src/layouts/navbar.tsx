"use client";

import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import navbarProperties from "@/styles/layouts/navbar";

const navbarMenuList = ["Home", "Portfolio", "Blog", "Calender", "Contact"];
const userSettings = ["My Profile", "Edit Profile", "Sign Out"];
const styles = navbarProperties;

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const renderMenuItems = (items: string[], onClick: () => void) => {
    return items.map((item) => (
      <MenuItem key={item} onClick={onClick}>
        <Typography sx={{ textAlign: "center" }}>{item}</Typography>
      </MenuItem>
    ));
  };

  const renderNavButtons = (items: string[]) => {
    return items.map((item) => (
      <Button key={item} onClick={handleCloseNavMenu} sx={styles.navButton}>
        {item}
      </Button>
    ));
  };

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container sx={styles.appBarContainer}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{ ...styles.logo, ...styles.logoDesktop }}
          >
            NICKY
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, ...styles.navMenuMobile }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.navMenuMobile}
            >
              {renderMenuItems(navbarMenuList, handleCloseNavMenu)}
            </Menu>
          </Box>

          {/* Logo and Mobile Text */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{ ...styles.logo, ...styles.logoMobile }}
          >
            LOGO
          </Typography>

          {/* Desktop Nav Buttons */}
          <Box sx={styles.navMenuDesktop}>
            {renderNavButtons(navbarMenuList)}
          </Box>

          {/* User Avatar and Settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={styles.userMenuIcon}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={styles.userMenu}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {renderMenuItems(userSettings, handleCloseUserMenu)}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
