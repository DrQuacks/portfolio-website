import textJson from '../assets/site_text.json';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TitleText from './TitleText';
import useProgressiveImg from '../hooks/useProgressiveImg';

const HomePage = () => {
  const homePageText = textJson.home
  const { title , subtitle , highlights } = homePageText

  const BlurredUpImage = () => {
    const {src, blur} = useProgressiveImg('/thinkingBW-low.png', '/thinkingBW.jpg');
    console.log('debugImg',{src, blur});
    return (
      <img
        src='/thinkingBW.jpg'
        style={{
          maxHeight:600,
          maxWidth:"90%",
          filter: blur ? "blur(20px)" : "none",
          transition: blur ? "none" : "filter 0.1s ease-out"
        }}
      />
    );
  };


  return (
    <div className='homeBody'>
      <div className='homeImage'>
        {/* <img style={{maxHeight:600,maxWidth:"90%"}} src={thinkingImageBW} alt='Me' /> */}
        {/* <img 
          style={{maxHeight:600,maxWidth:"90%"}} 
          src= '/thinkingBW.jpg'
          alt='Me' 
        /> */}
        <BlurredUpImage />
      </div>
      <div className='homeTitle'>
        <TitleText title={title} subTitle={subtitle} />
        <div className='homeTitleHighlights'>
          <List>
            {highlights.map((highlight: string) => {
              return <ListItem key={highlight} sx={{ fontSize: 25 , color: "gray" }}>{highlight}</ListItem>
            })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default HomePage;