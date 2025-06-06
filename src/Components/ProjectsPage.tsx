import { useState } from 'react';
import TitleText from './TitleText';
import { styled, useTheme } from '@mui/material/styles';
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
  const theme = useTheme();

  const [activeProject,setActiveProject] = useState<ActiveProject>('none');

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifySelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    wordWrap: 'break-word',
    transition: 'all 0.3s ease-in-out',
  }));

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 400,
    width: '100%',
    transition: 'all 0.3s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      transform: 'scale(1.02)',
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
    const isActive = activeProject === title;
    const filterType = isActive ? 'none' : 'blur(2px)';
    
    return (
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        minWidth: 200, 
        width: '100%',
        transform: isActive ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.3s ease-in-out',
      }}>
        <ImageButton
          focusRipple
          key={title}
          onClick={() => activeProject === title ? setActiveProject('none') : setActiveProject(title)}
          sx={{
            boxShadow: isActive ? '0 0 20px rgba(0,0,0,0.2)' : 'none',
          }}
        >
          <ImageSrc 
            style={{ 
              backgroundImage: `url(${lowPath})`, 
              filter: filterType,
              transition: 'all 0.3s ease-in-out',
            }} 
          />
          <ImageBackdrop 
            className="MuiImageBackdrop-root" 
            sx={{
              opacity: isActive ? 0.2 : 0.4,
            }}
          />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => (activeProject !== title ? 
                {
                  position: 'relative',
                  p: {
                    xs: 2,
                    sm: 4
                  },
                  pt: {
                    xs: 1,
                    sm: 2
                  },
                  pb: {
                    xs: `calc(${theme.spacing(1)} + 3px)`,
                    sm: `calc(${theme.spacing(1)} + 6px)`
                  },
                  transition: 'all 0.3s ease-in-out',
                  textAlign: 'center',
                  fontSize: {
                    xs: '0.9rem',
                    sm: '1rem'
                  }
                } : {
                  opacity: 0,
                  transition: 'all 0.3s ease-in-out',
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

  const ProjectDescription = ({ title, text }: { title: ActiveProject; text: string }) => {
    return (
      <Box sx={{ 
        width: '100%',
        padding: {
          xs: theme.spacing(1),
          sm: theme.spacing(2)
        },
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'all 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{
            marginBottom: theme.spacing(2),
            color: theme.palette.text.primary,
            textAlign: 'center',
            fontSize: {
              xs: '1.5rem',
              sm: '2rem'
            }
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          component="div"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            textAlign: {
              xs: 'left',
              sm: 'center'
            },
            maxWidth: '800px',
            padding: {
              xs: theme.spacing(1),
              sm: 0
            }
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  };

  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ 
          width: '90%',
          maxWidth: '1200px',
        }}>
          <Grid container spacing={4} justifyContent="center">
            {projectsPageText.projects.map((project) => {
              const isActive = activeProject === project.name;
              return (
                <Grid size={12}>
                  <Item 
                    sx={{
                      backgroundColor: isActive ? 
                        theme.palette.mode === 'dark' ? '#2A3037' : '#f5f5f5' 
                        : theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      boxShadow: isActive ? '0 0 20px rgba(0,0,0,0.1)' : 'none',
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      <ProjectButton title={project.name as ActiveProject} lowPath={project.path}/>
                      {isActive && <ProjectDescription title={project.name} text={project.description}/>}
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