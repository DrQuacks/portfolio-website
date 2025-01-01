import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import tsLogo from '../assets/ts-logo.png';
import jsLogo from '../assets/js-logo.png';
import pythonLogo from '../assets/py-logo.png';
import reactLogo from '../assets/react-logo.png';
import d3Logo from '../assets/d3-logo.png';
import numpyLogo from '../assets/numpy-logo.png';
import pandasLogo from '../assets/pandas-logo.png';
import pyTorchLogo from '../assets/pytorch-logo.webp';

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

  const SkillImage = ({text,path}:{text:string,path:string}) => {
    return (
      <div>
        <Typography variant="h4" component="div">{text}</Typography>
        <br/>
        <Box component="img" src={path} alt={text} sx={{ width: '100%' }} />
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
              <Item><SkillImage text="Javascript" path = {jsLogo}/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Typescript" path = {tsLogo}/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Python" path = {pythonLogo}/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="React" path = {reactLogo}/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="d3.js" path = {d3Logo}/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="NumPy" path = {numpyLogo}/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Pandas" path = {pandasLogo}/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="PyTorch" path = {pyTorchLogo}/></Item>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default SkillsPage;