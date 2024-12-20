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
  const Buttons = allPages.map((page) => {
    return <NavButtton page={page} clickHandler={setPage} />
  })
  return (
    <Box className = "NavBarDiv" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Michael Kellar
          </Typography>
          {Buttons}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;