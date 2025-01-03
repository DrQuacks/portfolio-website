import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const ProjectsPage = () => {
  const projectsPageText = textJson.projects
  const { title } = projectsPageText

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
            <Grid size={12}>
              <Item>TrialTrace</Item>
            </Grid>
            <Grid size={12}>
              <Item>Stock Market Predictions</Item>
            </Grid>
            <Grid size={12}>
              <Item>Personal Website (this one)</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default ProjectsPage;