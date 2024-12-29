import Typography from '@mui/material/Typography';
import textJson from '../assets/site_text.json';

function BottomBar() {
  const bottomText = textJson.bottomBar
  const {tagline} = bottomText
  return (
    <Typography component="div" align='center' sx={{ flexGrow: 1 , fontSize: 18 }}>
      {tagline}
    </Typography>
  );
}

export default BottomBar;