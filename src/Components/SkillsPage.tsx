import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import useProgressiveImg from '../hooks/useProgressiveImg';


const SkillsPage = () => {
  const skillsPageText = textJson.skills
  const { title } = skillsPageText

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const BlurredUpSkillImage = ({lowPath,highPath}:{lowPath:string,highPath:string}) => {
    const {src, blur} = useProgressiveImg(lowPath, highPath);
    console.log('debugImg',{src, blur});
    return (
      <Box
        component="img"
        src={src}
        style={{
          width: '100%',
          filter: blur ? "blur(10px)" : "none",
          transition: blur ? "none" : "filter 0.05s ease-out"
        }}
      />
    );
  };

  const SkillImage = ({text,path,lowPath}:{text:string,path:string,lowPath:string}) => {
    return (
      <div>
        <Typography variant="h4" component="div">{text}</Typography>
        <br/>
        <BlurredUpSkillImage lowPath={lowPath} highPath={path}/>
      </div>
    )
  } 
  
  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: '80%' }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            <Grid size={3}>
              <Item><SkillImage text="Javascript" path = '/js-logo.png' lowPath='/js-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Typescript" path = '/ts-logo.png' lowPath='/ts-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Python" path = 'py-logo.png' lowPath='/py-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="React" path = 'react-logo.png' lowPath='/react-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="d3.js" path = '/d3-logo.png' lowPath='/d3-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="NumPy" path = '/numpy-logo.png' lowPath='/numpy-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Pandas" path = 'pandas-logo.png' lowPath='/pandas-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="PyTorch" path = '/pytorch-logo.webp' lowPath='/pytorch-logo-low.webp'/></Item>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default SkillsPage;