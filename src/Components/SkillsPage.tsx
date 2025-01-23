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
          "description":`I've worked with JS`
      },
      {
          "name":"Typescript",
          "path":'/ts-logo.png',
          "description":`I've also worked with typescript`
      },
      {
          "name":"Python",
          "path":'/py-logo.png',
          "description":`Sometimes even Python`
      },
      {
          "name":"React",
          "path":'/react-logo.png',
          "description":`And also React`
      },
      {
          "name":"d3.js",
          "path":'/d3-logo.png',
          "description":`Even d3.js`
      },
      {
          "name":"NumPy",
          "path":'/numpy-logo.png',
          "description":`I've spent time with NumPy`
      },
      {
          "name":"Pandas",
          "path":'/pandas-logo.png',
          "description":`Pandas, not the animal`
      },
      {
          "name":"PyTorch",
          "path":'/pytorch-logo.webp',
          "description":`I'm starting to learn pytorch`
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
        <Typography sx={{ p: 1 }}>{popoverText}</Typography>
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