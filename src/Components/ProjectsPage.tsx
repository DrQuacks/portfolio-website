import { useState } from 'react';
import TitleText from './TitleText';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { Typography } from '@mui/material';

type ActiveProject = 'TrialTrace' | 'Stock Market Predictions' | "Prime Factor Trees" | 'Football Stats Visualizer' | 'StudyTrack' | 'Mixed Redox Couple Batteries' | 'none'

const projectsPageText: {
  title: string;
  projects: {
      name: ActiveProject;
      path: string;
      description: string;
      url?: string;
  }[];
} = {
  "title":"Projects",
  "projects":[
      {
          "name":"TrialTrace",
          "path":"/trialtrace-ss-low.jpg",
          "description":`At TrialTrace, a data visualization startup, I lead frontend development using React (with hooks), TypeScript, 
          and D3.js. I've owned several major features from concept to launch, collaborating cross-functionally to clarify requirements, 
          architect solutions, and deliver high-quality, performant UI. I've also improved usability and maintainability in legacy code, 
          championing clean code practices and modern tooling.`,
          "url":"https://www.trialtrace.com/"
      },
      {
          "name":"Stock Market Predictions",
          "path":"/stock-project-ss-low.jpg",
          "description":`To deepen my machine learning expertise, I've been building a stock price prediction platform with a Python backend 
          (NumPy, Pandas, scikit-learn) and a TypeScript + React frontend powered by D3.js for rich data visualizations. I designed and trained 
          regression models to forecast market trends, and am currently transitioning to PyTorch to implement more advanced neural networks and 
          gain deeper hands-on experience with deep learning architectures. This project has given me the opportunity to practice full-stack development, 
          experiment with model performance tuning, and present complex data in an intuitive UI.`,
          "url":"https://github.com/DrQuacks/stock-flask-app"
      },
      {
        "name":"Prime Factor Trees",
        "path":"/factortrees-ss-low.jpg",
        "description":`Prime Factor Trees is an interactive EdTech tool built with Next.js, Tailwind CSS, and Supabase. It helps students break 
        down numbers into prime factors through animated, visual trees and real-time feedback. I designed it to be both a frontend showcase and 
        a resource for the students I tutor, with Supabase tracking prior performance to support personalized learning.`,
        "url":"https://factor-tree-app.vercel.app/"
    },
      {
        "name":"Football Stats Visualizer",
        "path":"/footballstats-ss-low.jpg",
        "description":`This fullstack app showcases my data visualization skills using real NFL stats parsed from CSVs and stored in PostgreSQL. Built 
        with Next.js/React, TypeScript, and D3.js, it features interactive charts, a player search interface, and serverless API routes to 
        dynamically query Supabase-hosted data. The project uses pg.Pool for efficient Postgres connections, TailwindCSS for styling, and is deployed 
        via Vercel. It serves as a public-facing example of my frontend + data viz work, since my production work at TrialTrace sits behind a client login and paywall.
        As a note, the database only goes back to 2007. I'm getting data from pro-football-reference.com, and they have a no-web-scraper policy.`,
        "url":"https://football-data-viewer.vercel.app/"
      },
      {
        "name": "StudyTrack",
        "path": "/studytrack-ss-low.jpg",
        "description": `StudyTrack is a full-stack web application I'm building to reinforce my skills in modern web development. It's built with Next.js, 
        TypeScript, and Tailwind CSS on the frontend, and uses Express.js, GraphQL, and MongoDB on the backend. The app allows users to track their learning 
        progress across topics, set study goals, and visualize activity over time. This project has given me hands-on experience integrating a GraphQL API, 
        managing user authentication, and designing a responsive UI using Tailwind.`
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
    [theme.breakpoints.up('md')]: {
      height: 300, // This creates a 3:2 aspect ratio when width is 100% (450px would be 3:2, but 300px gives a nice rectangular look)
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
    backgroundPosition: 'left center',
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

  const ProjectDescription = ({ title, text, url }: { title: ActiveProject; text: string, url?:string }) => {
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
        {url && (
          <Typography 
            variant="h6" 
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              marginBottom: theme.spacing(2),
              color: theme.palette.primary.main,
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: {
                xs: '1rem',
                sm: '1.25rem'
              },
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {url}
          </Typography>
        )}
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
          <Grid 
            container 
            spacing={4} 
            justifyContent="center"
            sx={{
              width: '100%',
              margin: '0 auto',
            }}
          >
            {projectsPageText.projects.map((project) => {
              const isActive = activeProject === project.name;
              return (
                <Grid 
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
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
                      {isActive && <ProjectDescription title={project.name} text={project.description} url={project.url}/>}
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