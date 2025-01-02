import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Page} from '../App';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


function NavigationBarMobile(
  { setPage,
    allPages
   }:{ 
    setPage: (page: Page) => void ,
    allPages: readonly Page[]}
) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const NavItems = allPages.map((page) => {
    const handleClick = () => {
      setPage(page)
      setAnchorEl(null);
    };
    return <MenuItem onClick={handleClick}>{page}</MenuItem>
  })
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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Michael Kellar
          </Typography>
          {NavMenu}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBarMobile;