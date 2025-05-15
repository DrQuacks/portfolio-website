import { useState } from 'react';
import TitleText from './TitleText';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { Typography } from '@mui/material';

type ActiveProject = 'TrialTrace' | 'Stock Market Predictions' | 'Mixed Redox Couple Batteries' | 'none'

const projectsPageText: {
  title: string;
  projects: {
      name: ActiveProject;
      path: string;
      description: string;
  }[];
} = {
  "title":"Projects",
  "projects":[
      {
          "name":"TrialTrace",
          "path":"/trialtrace-ss-low.jpg",
          "description":`TrialTrace is a startup I've worked at as a Frontend Developer. Mostly I write React code
          for user input, specifically hook based React, and then use d3.js to provide the output. The codebase largely
          is written in TypeScript. The scope of my work centers around being given specs for functionality of the app, and I write
          code and build components to implement that functionality. I have been the lead developer for the past two years, 
          and have fully written a handful of new features, as well as adding better usability into legacy components`
      },
      {
          "name":"Stock Market Predictions",
          "path":"/stock-project-ss-low.jpg",
          "description":`As a way to get more experience with machine learning, I've been working on a project to predict stock prices. 
          The backend of the project is written in Python, and uses the numpy, pandas, and scikit-learn libraries. 
          The frontend is written in Typescript and React, and like my work for TrialTrace, uses d3.js. I am currently learning how to use
          PyTorch to implement a more advanced neural net than I get out-of-the-box with scikit-learn.`
      },
      {
          "name":"Mixed Redox Couple Batteries",
          "path":"/MRC-Charge-low.jpg",
          "description":`My work in graduate school focused on a novel design for lithium-ion battery electrodes. Battery electrodes typically suffer
          from uneven current distributions, meaning certain parts of the electrode are underutilized, and other parts are overutilized. My design
          utilized putting a more energetically favorable material in parts of an electrode known to be underutilized, in order to increase
          capacities at high rates`
      }
  ]
}

const ProjectsPage = () => {
  const { title } = projectsPageText

  const [activeProject,setActiveProject] = useState<ActiveProject>('none');

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure it stretches to the container width
    wordWrap: 'break-word', // Ensure text wraps properly
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
      // <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 500, width: '100%' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 200, width: '100%' }}>
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

  const ProjectDescription = ({title,text}:{title:ActiveProject,text:string}) => {
    console.log('debugImg',{title});
    return (
      <div>
        <Typography variant="h4" component="div">{title}</Typography>
        <Typography variant="body1" component="div">{text}</Typography>
      </div>
    )
  }
  console.log('update check 3')

  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: {xs:'90%',sm:'80%'}, maxWidth:'100%', overflow: 'clip', padding: 1 }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            {projectsPageText.projects.map((project) => {
              return (
                <Grid size={12}>
                  <Item>
                    <Box sx={{ width: '100%'}}> {/* Shared container */}
                      <ProjectButton title={project.name as ActiveProject} lowPath={project.path}/>
                      {activeProject === project.name && <ProjectDescription title = {project.name} text = {project.description}/>}
                    </Box>
                  </Item>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default ProjectsPage;