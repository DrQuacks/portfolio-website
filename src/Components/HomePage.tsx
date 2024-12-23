import textJson from '../assets/site_text.json';
import thinkingImageBW from '../assets/thinkingBW.jpg'; // Ensure you have the correct path to your image
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const HomePage = () => {
  const homePageText = textJson.home
  const { title , subtitle , highlights } = homePageText
  return (
    <div className='homeBody'>
      <div className='homeImage'>
        <img src={thinkingImageBW} alt='Me' />
      </div>
      <div className='homeTitle'>
        <div className='homeTitleText'>
          <Typography variant="h1" component="div">
            {title}
          </Typography>
          <Typography variant="h2" component="div">
            {subtitle}
          </Typography>
        </div>
        <div className='homeTitleHighlights'>
          <List>
            <ListItem sx={{ fontSize: 32 }}>{highlights[0]}</ListItem>
            <ListItem sx={{ fontSize: 32 }}>{highlights[1]}</ListItem>
            <ListItem sx={{ fontSize: 32 }}>{highlights[2]}</ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default HomePage;