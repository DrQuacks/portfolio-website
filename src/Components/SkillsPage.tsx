import TitleText from './TitleText';
import { useState , useRef } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';

const skillsPageText: {
  title: string;
  projects: {
      name: string;
      path: string;
      description: string;
  }[];
} = {
  "title":"Skills",
  "projects":[
      {
          "name":"Javascript",
          "path":'/js-logo.png',
          "description":`I am fairly fluent in Javascript. I've been using it extensively for my job at TrialTrace, as well as the frontend for my ML side project,
          and also for this website!`
      },
      {
          "name":"Typescript",
          "path":'/ts-logo.png',
          "description":`I am also fairly fluent in Typescript for all the same reasons I listed in my Javascript blurb. Even this website is written entirely in
          Typescript! The first real programming language I learned was Java, and so I still naturally think about coding as being typed.`
      },
      {
          "name":"Python",
          "path":'/py-logo.png',
          "description":`I have been learning and working with Python as a means to work with ML/AI. Much of it I initially learned by completing the Dataquest
          online course, and I've been using it for the back end on my ML side project.`
      },
      {
          "name":"React",
          "path":'/react-logo.png',
          "description":`Just like my work with JS/TS, most of my frontend work has utilized React. In fact, that is the framework for this website! Specifically I am
          most familiar with hook-based React, and I've set up websites both with Create-React-App and Vite.`
      },
      {
          "name":"Next.js",
          "path":'/nextjs-logo.svg',
          "description":`I have been learning Next.js as a modern React framework and am utilizing it in my StudyTrack side project.`
      },
      {
          "name":"GraphQL",
          "path":'/graphql-logo.png',
          "description":`I have been learning GraphQL as part of my effort to develop full-stack skills, and am utilizing it in my StudyTrack project`
      },
      {
          "name":"Express.js",
          "path":'/express-logo.png',
          "description":`I have been learning Express.js as part of my effort to develop full-stack skills, and am utilizing it in my StudyTrack project`
      },
      {
          "name":"MongoDB",
          "path":'/mongodb-logo.webp',
          "description":`I have been learning MongoDB as part of my effort to develop full-stack skills, and am utilizing it in my StudyTrack project`
      },
      {
          "name":"d3.js",
          "path":'/d3-logo.png',
          "description":`I use d3.js for the frontend visualizations in both my work for TrialTrace as well as my ML Stock Market Project.`
      },
      {
          "name":"NumPy",
          "path":'/numpy-logo-trans.png',
          "description":`I learned NumPy through the Dataquest online course, and still use it in the back end of my ML Stock Market Project.`
      },
      {
          "name":"Pandas",
          "path":'/pandas-logo.png',
          "description":`I learned NumPy through the Dataquest online course, and still use it in the back end of my ML Stock Market Project.`
      },
      {
          "name":"PyTorch",
          "path":'/pytorch-logo.webp',
          "description":`I have been learning PyTorch over the past year, and am beginning to implement it into my ML Stock Market Project to replace Scikit-Learn.`
      }
  ]
}

const SkillsPage = () => {
  const { title } = skillsPageText
  const theme = useTheme();

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const popoverAnchor = useRef<HTMLDivElement | null>(null);
  const [popoverText, setPopoverText] = useState("");

  const handleSkillClick = (event: React.MouseEvent<HTMLDivElement>, skillName: string, description: string) => {
    if (selectedSkill === skillName) {
      // If clicking the same skill, close it
      setSelectedSkill(null);
      popoverAnchor.current = null;
    } else {
      // If clicking a different skill, select it
      setSelectedSkill(skillName);
      popoverAnchor.current = event.currentTarget;
      setPopoverText(description);
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minWidth: '175px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transition: 'all 0.2s ease-in-out',
  }));

  const ImageContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    paddingTop: '100%', // 1:1 Aspect ratio
    overflow: 'hidden',
  });

  const ResponsiveImage = styled('img')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
  });

  const SkillImage = ({text,path}:{text:string,path:string}) => {
    return (
      <div>
        <Typography variant="h4" component="div" sx={{ overflow: 'hidden', marginBottom: 1 }}>{text}</Typography>
        <ImageContainer>
          <ResponsiveImage
            src={path}
            alt={`${text} logo`}
          />
        </ImageContainer>
      </div>
    )
  } 

  const SkillPopover = () => {
    return(
      <Popover
        id={selectedSkill ? 'skill-popper' : undefined}
        sx={{ 
          pointerEvents: 'none',
          '& .MuiPaper-root': {
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            color: theme.palette.text.primary,
          }
        }}
        open={selectedSkill !== null}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        disableRestoreFocus
        disablePortal
      >
        <Typography sx={{ p: 1, maxWidth: 500 }}>{popoverText}</Typography>
      </Popover>
    )
  }

  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: '80%' }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12, xl: 18 }} justifyContent="center">
            {skillsPageText.projects.map((project) =>{
              const isSelected = selectedSkill === project.name;
              return(
                <Grid size={3}>
                  <div
                      onClick={(e) => handleSkillClick(e, project.name, project.description)}
                      style={{
                        cursor: 'pointer',
                        transform: isSelected ? 'scale(1.05)' : 'none',
                        transition: 'transform 0.2s ease-in-out',
                      }}
                  >
                    <Item 
                      sx={{
                        boxShadow: isSelected ? '0 0 10px rgba(0,0,0,0.2)' : 'none',
                        backgroundColor: isSelected ? 
                          theme.palette.mode === 'dark' ? '#2A3037' : '#f5f5f5'
                          : theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                      }}
                    >
                      <SkillImage text={project.name} path={project.path}/>
                    </Item>
                  </div>
                  <SkillPopover/>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
export default SkillsPage;