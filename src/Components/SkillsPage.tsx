import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import { useState , useRef } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
// import useProgressiveImg from '../hooks/useProgressiveImg';


const SkillsPage = () => {
  const skillsPageText = textJson.skills
  const { title } = skillsPageText

  const [openedPopover, setOpenedPopover] = useState(false)
  const popoverAnchor = useRef(null);

  //const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log('debugImgHover',{event,popoverAnchor});
    // setAnchorEl(event.currentTarget);
    setOpenedPopover(true)
  };

  const handlePopoverClose = () => {
    //setAnchorEl(null);
    setOpenedPopover(false)
    console.log('debugImgHoverClose');

  };

  // const open = Boolean(anchorEl);
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

  // const BlurredUpSkillImage = ({lowPath,highPath}:{lowPath:string,highPath:string}) => {
  //   const {src, blur} = useProgressiveImg(lowPath, highPath);
  //   console.log('debugImg',{src, blur});
  //   return (
  //     <Box
  //       component="img"
  //       src={src}
  //       // onMouseEnter={handlePopoverOpen}
  //       // onMouseLeave={handlePopoverClose}
  //       style={{
  //         width: '100%',
  //         filter: blur ? "blur(10px)" : "none",
  //         transition: blur ? "none" : "filter 0.05s ease-out"
  //       }}
  //     />
  //   );
  // };

  // const SkillImage = ({text,path,lowPath}:{text:string,path:string,lowPath:string}) => {
  //   return (
  //     <div
  //       onMouseEnter={handlePopoverOpen}
  //       onMouseLeave={handlePopoverClose}
  //     >
  //       <Typography variant="h4" component="div" sx={{ overflow: 'hidden' }}>{text}</Typography>
  //       <br/>
  //       <BlurredUpSkillImage lowPath={lowPath} highPath={path}/>
  //       <Popover
  //         id="mouse-over-popover"
  //         sx={{ pointerEvents: 'none' }}
  //         open={open}
  //         anchorEl={anchorEl}
  //         anchorOrigin={{
  //           vertical: 'bottom',
  //           horizontal: 'left',
  //         }}
  //         transformOrigin={{
  //           vertical: 'top',
  //           horizontal: 'left',
  //         }}
  //         // onClose={handlePopoverClose}
  //         disableRestoreFocus
  //       >
  //         <Typography sx={{ p: 1 }}>I use Popover.</Typography>
  //       </Popover>
  //     </div>
  //   )
  // } 

  const classes = useStyles();

  const SkillImage = ({text,path,lowPath}:{text:string,path:string,lowPath:string}) => {
    console.log(lowPath)
    return (
      <div
        ref={popoverAnchor}
        onMouseEnter={handlePopoverOpen}
        //onMouseOver={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Typography variant="h4" component="div" sx={{ overflow: 'hidden' }}>{text}</Typography>
        <br/>
        <Box
          component="img"
          src={path}
          // onMouseEnter={handlePopoverOpen}
          // onMouseOver={handlePopoverOpen}
          // onMouseLeave={handlePopoverClose}
          style={{
            width: '100%',
          }}
        />
        <Popover
          id={id}
          sx={{ pointerEvents: 'none' }}
          open={openedPopover}
          className={classes.popover}
          classes={{
            paper: classes.popoverContent,
          }}
          anchorEl={popoverAnchor.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          // transformOrigin={{
          //   vertical: 'top',
          //   horizontal: 'left',
          // }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          // disablePortal
        >
          <Typography sx={{ p: 1 }}>I use Popover.</Typography>
        </Popover>
      </div>
    )
  } 
  
  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: '80%' }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            <Grid size={3}>
              <Item><SkillImage text="Javascript" path = '/js-logo.png' lowPath='/js-logo-low.jpg'/></Item>
            </Grid>
            <Grid size={3}>
              <Item><SkillImage text="Typescript" path = '/ts-logo.png' lowPath='/ts-logo-low.jpg'/></Item>
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