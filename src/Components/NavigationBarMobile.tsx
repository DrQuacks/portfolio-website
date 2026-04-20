import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

function NavigationBarMobile(
  { allPages
   }:{
    allPages: readonly { name: string; path: string }[]}
) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const NavItems = allPages
    .filter((page) => page.name !== 'Home')
    .map((page) => {
      const handleClick = () => {
        setAnchorEl(null);
      };
      return (
        <MenuItem key={page.name} onClick={handleClick} component={RouterLink} to={page.path}>
          {page.name}
        </MenuItem>
      )
    });

  const NavMenu = 
    <div>
      <IconButton aria-label="menu" onClick={handleClick}>
        <MenuIcon sx={{color:"white"}}/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {NavItems}
      </Menu>
    </div>

  return (
    <Box className="NavBarDivNotHidden" sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: 'black' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'inline-block' }}>
            <Typography 
              variant="h5" 
              component={RouterLink}
              to="/"
              sx={{ 
                display: 'inline-block',
                cursor: 'pointer',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  opacity: 0.8,
                },
                transition: 'opacity 0.2s',
              }}
            >
              Michael Kellar
            </Typography>
          </Box>
          {NavMenu}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBarMobile;