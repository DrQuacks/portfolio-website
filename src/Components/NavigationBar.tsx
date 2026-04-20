import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavButtton from './NavButton';
import { Link as RouterLink } from 'react-router-dom';


function NavigationBar(
  { allPages
   }:{
    allPages: readonly { name: string; path: string }[]}
) {
  const Buttons = allPages
    .filter((page) => page.name !== 'Home')
    .map((page) => {
      return <NavButtton key={page.name} page={page.name} path={page.path} />
    });

  return (
    <Box className="NavBarDivNotHidden" sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: 'black' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'inline-block' }}>
            <Typography 
              variant="h4" 
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
          {Buttons}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;