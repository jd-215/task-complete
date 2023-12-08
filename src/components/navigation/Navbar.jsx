import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ButtonTabs from './Buttons';
import Logo from './../../assets/logo.svg';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 6 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'row' }}>
        <AppBar position="relative">
          <Toolbar sx={{ backgroundColor: '#ffffff' }}>
            <Box
              component="div"
              sx={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingRight: '10px',
                  borderRight: '1px solid rgba(2, 48, 106, 0.50)',
                  m: 1,
                }}
              >
                <img src={Logo} className="logo react" alt="React logo" />
              </Box>

              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  padding: '10px',
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                    color: '#02306A',
                    padding: '10px',
                    paddingRight: '20px',
                    borderRight: '1px solid rgba(2, 48, 106, 0.50)',
                  }}
                >
                  User Access Management
                </Typography>
              </Box>
              <Box component="div">
                <ButtonTabs />
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexGrow: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Box
                component="div"
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                }}
              >
                <Box
                  component="div"
                  sx={{
                    m: 1,
                    borderRight: '1px solid rgba(2, 48, 106, 0.50)',
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="show 6 new notifications"
                    color="inherit"
                    sx={{ marginRight: '10px' }}
                  >
                    <Badge badgeContent={6} color="error">
                      {/* <NotificationsIcon /> */}
                      <NotificationsNoneIcon
                        fontSize="large"
                        sx={{
                          color: '#02306A',
                        }}
                      />
                    </Badge>
                  </IconButton>
                </Box>

                <Box
                  component="div"
                  sx={{
                    padding: 2,
                    display: {
                      xs: 'none',
                      md: 'flex',
                    },
                    flexDirection: 'column',
                  }}
                >
                  <Box component={'div'}>
                    <Typography
                      sx={{
                        display: {
                          xs: 'none',
                          md: 'flex',
                        },
                        color: '#02306A',
                      }}
                      variant="h7"
                      noWrap
                      component="div"
                    >
                      User Name
                    </Typography>
                  </Box>
                  <Typography
                    component={'div'}
                    variant="capation"
                    sx={{
                      fontSize: '12px',
                      display: {
                        xs: 'none',
                        md: 'flex',
                      },
                      flexGrow: 1,
                      justifyContent: 'flex-end',
                      color: '#02306A',
                    }}
                  >
                    CXO
                  </Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'flex',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                    },
                  }}
                >
                  <Box component="div" sx={{ p: 1 }}>
                    <IconButton
                      size="small"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircleOutlinedIcon
                        fontSize="large"
                        sx={{
                          color: '#02306A',
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                {/* <Box
									sx={{
										display: {
											xs: "flex",
											md: "none",
										},
									}}
								>
									<IconButton
										size="large"
										aria-label="show more"
										aria-controls={mobileMenuId}
										aria-haspopup="true"
										onClick={handleMobileMenuOpen}
										color="inherit"
									>
										<MoreIcon />
									</IconButton>
								</Box> */}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
};

export default Navbar;
