import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { routes } from '../../constants/routeConstants';

import { useKeycloak } from "@react-keycloak/web";

function Navbar() {
  const { keycloak, initialized } = useKeycloak();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    let {attributes} = await keycloak.loadUserProfile();
    localStorage.setItem("userId", attributes.userId[0]);
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //Close menu options
  const handleCloseNavMenu = (route) => {
    if (route) {
      window.history.pushState(null, null, route);
    }
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //close user settings options
  const handleCloseUserMenu = (route) => {
    if (route) {
      if (route === "/auth") {
        keycloak.logout('/auth');
      }

      window.history.pushState(null, null, route);
    }
    setAnchorElUser(null);
  };

  const handleGoHome = () => {
    window.history.pushState(null, null, '/home');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <StorefrontIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            style={{ cursor: 'pointer' }}
            onClick={handleGoHome}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              routes.pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => handleCloseNavMenu(page.route)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))
            }
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
                routes.pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={() => handleCloseNavMenu(page.route)}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>

          <StorefrontIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            style={{ cursor: 'pointer' }}
            onClick={handleGoHome}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STORE
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu()}
            >
              {
                routes.settings.map((setting) => (
                  <MenuItem
                    key={setting.title}
                    onClick={() => handleCloseUserMenu(setting.route)}
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;