import textJson from '../assets/site_text.json';
import thinkingImageBW from '../assets/thinkingBW.jpg'; // Ensure you have the correct path to your image
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TitleText from './TitleText';


const HomePage = () => {
  const homePageText = textJson.home
  const { title , subtitle , highlights } = homePageText
  return (
    <div className='homeBody'>
      <div className='homeImage'>
        <img style={{maxHeight:600}} src={thinkingImageBW} alt='Me' />
      </div>
      <div className='homeTitle'>
        <TitleText title={title} subTitle={subtitle} />
        <div className='homeTitleHighlights'>
          <List>
            <ListItem sx={{ fontSize: 25 }}>{highlights[0]}</ListItem>
            <ListItem sx={{ fontSize: 25 }}>{highlights[1]}</ListItem>
            <ListItem sx={{ fontSize: 25 }}>{highlights[2]}</ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default HomePage;