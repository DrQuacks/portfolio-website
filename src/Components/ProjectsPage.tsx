import { useState } from 'react';
import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { Typography } from '@mui/material';

type ActiveProject = 'TrialTrace' | 'Stock Market Predictions' | 'Mixed Redox Couple Batteries' | 'none'
const ProjectsPage = () => {
  const projectsPageText = textJson.projects
  const { title } = projectsPageText

  const [activeProject,setActiveProject] = useState<ActiveProject>('none');

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

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  const ProjectButton = ({title,lowPath}:{title:ActiveProject,lowPath:string}) => {
    console.log('debugImg',{title,lowPath});
    const filterType = activeProject === title ? 'none' : 'blur(3px)';
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 500, width: '100%' }}>
        <ImageButton
          focusRipple
          key={title}
          style={{
            width: '100%',
          }}
          onClick={() => activeProject === title ? setActiveProject('none') : setActiveProject(title)}
        >
          <ImageSrc style={{ backgroundImage: `url(${lowPath})`, filter: filterType}} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => (activeProject !== title ? 
                {
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                } : {
                  opacity: 0
                }
              )}
            >
              {title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Box>
    );
  };

  const ProjectDescription = ({title}:{title:ActiveProject}) => {
    console.log('debugImg',{title});
    return (
      <Typography variant="h4" component="div">{title}</Typography>
    )
  }

  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: '80%', overflow: 'clip' }}>
        {/* <Box sx={{ width: '80%' }}> */}
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            <Grid size={12}>
              <Item>
                <ProjectButton title="TrialTrace" lowPath='/trialtrace-ss-low.jpg'/>
                {activeProject === "TrialTrace" && <ProjectDescription title = "TrialTrace"/>}
              </Item>
            </Grid>
            <Grid size={12}>
              <Item>
                <ProjectButton title="Stock Market Predictions" lowPath='/stock-project-ss-low.jpg'/>
                {activeProject === "Stock Market Predictions" && <ProjectDescription title = "Stock Market Predictions"/>}
              </Item>
            </Grid>
            <Grid size={12}>
              <Item>
                <ProjectButton title="Mixed Redox Couple Batteries" lowPath='/MRC-Charge-low.jpg'/>
                {activeProject === "Mixed Redox Couple Batteries" && <ProjectDescription title = "Mixed Redox Couple Batteries"/>}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default ProjectsPage;