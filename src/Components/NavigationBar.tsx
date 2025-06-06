import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Page} from '../App';
import NavButtton from './NavButton';


function NavigationBar(
  { setPage,
    allPages
   }:{ 
    setPage: (page: Page) => void ,
    allPages: readonly Page[]}
) {
  const Buttons = allPages
    .filter(page => page !== 'Home')
    .map((page) => {
      return <NavButtton key={page} page={page} clickHandler={setPage} />
    });

  return (
    <Box className="NavBarDivNotHidden" sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: 'black' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'inline-block' }}>
            <Typography 
              variant="h4" 
              component="span"
              sx={{ 
                display: 'inline-block',
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                },
                transition: 'opacity 0.2s',
              }}
              onClick={() => setPage('Home')}
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