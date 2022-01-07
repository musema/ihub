import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { FarRightMenu } from './FarRightMenu/FarRightMenu';
import { Button, Paper } from '@material-ui/core';

export const NavBarRight = () => {
    const [currentUser, setCurrentUser] = useState();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const history = useHistory();

    const onSignInClick = () => {
      history.push('/auth');
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
    if(currentUser !== undefined){
      return (
        <>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={8} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      <MobileMenu
            moreMenuAnchorEl={anchorEl}
            menuId={mobileMenuId}
            isOpen={isMobileMenuOpen}
            onMobileMenuClose={handleMobileMenuClose}
            onProfileMenuOpen={handleProfileMenuOpen}
      />
      <FarRightMenu
        anchorEl={anchorEl}
        open={isMenuOpen}
        id={menuId}
        onClose={handleMenuClose}
      />
      </>
        );
    }

  return (
    <Paper>
      <Button onClick={onSignInClick }>Sign in</Button>
    </Paper>
  );

};
