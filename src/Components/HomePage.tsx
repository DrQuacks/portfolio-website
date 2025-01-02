import textJson from '../assets/site_text.json';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TitleText from './TitleText';
import useProgressiveImg from '../hooks/useProgressiveImg';

const HomePage = () => {
  const homePageText = textJson.home
  const { title , subtitle , highlights } = homePageText

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
    <div className={'homeBody'}>
      <div className={'homeImage'}>
        <BlurredUpImage />
      </div>
      <div className={'homeTitle'}>
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