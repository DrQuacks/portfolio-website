import textJson from '../assets/site_text.json';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TitleText from './TitleText';
import useProgressiveImg from '../hooks/useProgressiveImg';
import useMediaQuery from '@mui/material/useMediaQuery';

const HomePage = () => {
  const homePageText = textJson.home
  const { title , subtitle , highlights } = homePageText
  const isMobile = useMediaQuery('(max-width:600px)');
  const bodyClass = isMobile ? 'homeBodyMobile' : 'homeBody';
  const imgClass = isMobile ? 'homeImageMobile' : 'homeImage';
  const titleClass = isMobile ? 'homeTitleMobile' : 'homeTitle';

  const BlurredUpImage = () => {
    const {src, blur} = useProgressiveImg('/thinkingBW-low.jpg', '/thinkingBW.png');
    console.log('debugImg',{src, blur});
    return (
      <img
        src={src}
        style={{
          maxHeight:600,
          maxWidth:"90%",
          filter: blur ? "blur(10px)" : "none",
          transition: blur ? "none" : "filter 0.05s ease-out"
        }}
      />
    );
  };

  return (
    <div className={bodyClass}>
      <div className={imgClass}>
        <BlurredUpImage />
      </div>
      <div className={titleClass}>
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