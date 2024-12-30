import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

const SkillsPage = () => {
  const skillsPageText = textJson.skills
  const { title } = skillsPageText
  //const iconSize = 50

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
  
  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: '80%' }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            <Grid size={4}>
              <Item>Javascript/TypeScript</Item>
            </Grid>
            <Grid size={4}>
              <Item>Python</Item>
            </Grid>
            <Grid size={4}>
              <Item>Ruby</Item>
            </Grid>
            <Grid size={4}>
              <Item>React</Item>
            </Grid>
            <Grid size={4}>
              <Item>NumPy/Pandas/PyTorch</Item>
            </Grid>
            <Grid size={4}>
              <Item>d3.js</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default SkillsPage;