import TitleText from './TitleText';
import { useState , useRef } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
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
          "name":"d3.js",
          "path":'/d3-logo.png',
          "description":`I use d3.js for the frontend visualizations in both my work for TrialTrace as well as my ML Stock Market Project.`
      },
      {
          "name":"NumPy",
          "path":'/numpy-logo.png',
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

  const [openedPopover, setOpenedPopover] = useState(false)
  const popoverAnchor = useRef<HTMLDivElement | null>(null);
  const [popoverText,setPopoverText] = useState("")

  const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>,text:string) => {
    const {currentTarget} = event
    console.log('debugImgHover',{currentTarget,event,popoverAnchor});
    popoverAnchor.current = event.currentTarget
    setOpenedPopover(true)
    setPopoverText(text)
  };

  const handlePopoverClose = () => {
    popoverAnchor.current = null
    setOpenedPopover(false)
    console.log('debugImgHoverClose');

  };

  const id = openedPopover ? 'skill-popper' : undefined;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minWidth: '175px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const SkillImage = ({text,path,lowPath}:{text:string,path:string,lowPath:string}) => {
    console.log(popoverAnchor,lowPath)
    return (
      <div>
        <Typography variant="h4" component="div" sx={{ overflow: 'hidden' }}>{text}</Typography>
        <br/>
        <Box
          key={text}
          component="img"
          src={path}
          style={{
            width: '100%',
          }}
        />
      </div>
    )
  } 

  const SkillPopover = () => {
    return(
      <Popover
        id={id}
        sx={{ pointerEvents: 'none' }}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        onClose={handlePopoverClose}
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
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            {skillsPageText.projects.map((project) =>{
              return(
                <Grid size={3}>
                  <div
                      ref={popoverAnchor}
                      onMouseEnter={(e) => handlePopoverOpen(e,project.description)}
                      onMouseLeave={handlePopoverClose}
                  >
                    <Item><SkillImage text={project.name} path={project.path} lowPath={project.path}/></Item>
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