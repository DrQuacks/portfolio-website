import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import { useState , useRef } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';

const SkillsPage = () => {
  const skillsPageText = textJson.skills
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

  // return (
  //   <div className='container'>
  //     <TitleText title={title} />
  //     <div className='contactBody'
  //       ref={popoverAnchor}
  //       onMouseEnter={handlePopoverOpen}
  //       onMouseLeave={handlePopoverClose}
  //     >
  //       <Box sx={{ width: '80%' }}>
  //         <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
  //           <Grid size={3}>
  //             <Item ><SkillImage text="Javascript" path = '/js-logo.png' lowPath='/js-logo-low.jpg'/></Item>
  //           </Grid>
  //           <Grid size={3}>
  //             <Item><SkillImage text="Typescript" path = '/ts-logo.png' lowPath='/ts-logo-low.jpg'/></Item>
  //           </Grid>
  //           <Grid size={3}>
  //             <Item><SkillImage text="Python" path = 'py-logo.png' lowPath='/py-logo-low.png'/></Item>
  //           </Grid>
  //           <Grid size={3}>
  //             <Item><SkillImage text="React" path = 'react-logo.png' lowPath='/react-logo-low.png'/></Item>
  //           </Grid>
  //           <Grid size={3}>
  //             <Item><SkillImage text="d3.js" path = '/d3-logo.png' lowPath='/d3-logo-low.png'/></Item>
  //           </Grid>
  //           <Grid size={3}>
  //             <Item><SkillImage text="NumPy" path = '/numpy-logo.png' lowPath='/numpy-logo-low.jpg'/></Item>
  //           </Grid>
  //           <Grid size={3}>
  //             <Item><SkillImage text="Pandas" path = 'pandas-logo.png' lowPath='/pandas-logo-low.png'/></Item>
  //           </Grid>
  //           <Grid size={3}>
  //             <Item><SkillImage text="PyTorch" path = '/pytorch-logo.webp' lowPath='/pytorch-logo-low.png'/></Item>
  //           </Grid>

  //         </Grid>
  //       </Box>
  //     </div>
  //     <Popover
  //       id={id}
  //       sx={{ pointerEvents: 'none' }}
  //       open={openedPopover}
  //       // className={classes.popover}
  //       // classes={{
  //       //   paper: classes.popoverContent,
  //       // }}
  //       anchorEl={popoverAnchor.current}
  //       anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'right'
  //       }}
  //       // transformOrigin={{
  //       //   vertical: 'top',
  //       //   horizontal: 'left',
  //       // }}
  //       onClose={handlePopoverClose}
  //       disableRestoreFocus
  //       disablePortal
  //     >
  //       <Typography sx={{ p: 1 }}>I use Popover too.</Typography>
  //     </Popover>
  //   </div>
  // );

  // const GridItem = ({text,path,lowPath}:{text:string,path:string,lowPath:string}) => {
  //   return (<Grid size={3}>
  //     <div
  //         ref={popoverAnchor}
  //         onMouseEnter={handlePopoverOpen}
  //         onMouseLeave={handlePopoverClose}
  //     >
  //       <Item><SkillImage text={text} path = {path} lowPath={lowPath}/></Item>
  //     </div>
  //   </Grid>)
  // }

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
        <Typography sx={{ p: 1 }}>I use {popoverText} too.</Typography>
      </Popover>
    )
  }
  
  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: '80%' }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            <Grid size={3}>
              <div
                  ref={popoverAnchor}
                  onMouseEnter={(e) => handlePopoverOpen(e,'javascript')}
                  onMouseLeave={handlePopoverClose}
              >
                <Item><SkillImage text="Javascript" path = '/js-logo.png' lowPath='/js-logo-low.jpg'/></Item>
              </div>
              <SkillPopover/>
            </Grid>
            <Grid size={3}>
              <div
                  ref={popoverAnchor}
                  onMouseEnter={(e) => handlePopoverOpen(e,'typescript')}
                  onMouseLeave={handlePopoverClose}
              >
                <Item><SkillImage text="Typescript" path = '/ts-logo.png' lowPath='/ts-logo-low.jpg'/></Item>
              </div>
              <SkillPopover/>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Python" path = 'py-logo.png' lowPath='/py-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="React" path = 'react-logo.png' lowPath='/react-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="d3.js" path = '/d3-logo.png' lowPath='/d3-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="NumPy" path = '/numpy-logo.png' lowPath='/numpy-logo-low.jpg'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Pandas" path = 'pandas-logo.png' lowPath='/pandas-logo-low.png'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="PyTorch" path = '/pytorch-logo.webp' lowPath='/pytorch-logo-low.png'/></Item>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default SkillsPage;