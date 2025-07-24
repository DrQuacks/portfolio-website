import TitleText from './TitleText';
import { useState , useRef , useEffect } from 'react';
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
  "projects": [
    {
      "name": "JavaScript",
      "path": "/js-logo.png",
      "description": "I use JavaScript extensively in my work at TrialTrace, as well as in the frontend of my machine learning side project and this website. I’m comfortable building production-ready applications with it."
    },
    {
      "name": "TypeScript",
      "path": "/ts-logo.png",
      "description": "Most of my recent frontend work is written in TypeScript, including this website. With a background in Java, I naturally think in typed systems and appreciate the safety TypeScript adds to modern development."
    },
    {
      "name": "Python",
      "path": "/py-logo.png",
      "description": "I’ve been using Python primarily for machine learning, starting with the Dataquest curriculum and continuing through backend development in my stock prediction side project."
    },
    {
      "name": "React",
      "path": "/react-logo.png",
      "description": "React is the foundation for most of my frontend development. I'm most familiar with modern, hook-based React, and have built projects using both Create React App and Vite."
    },
    {
      "name": "Next.js",
      "path": "/nextjs-logo.svg",
      "description": "I've used Next.js for my fullstack projects, including StudyTrack and the Football Stats Visualizer. It's helped me learn server-side rendering and modern React architecture."
    },
    {
      "name": "Tailwind",
      "path": "/tailwind-logo.png",
      "description": "I use Tailwind CSS for styling React components in all my side projects, including my Factor Tree App and Football Stats Visualizer."
    },
    {
      "name": "GraphQL",
      "path": "/graphql-logo.png",
      "description": "I’m learning GraphQL as part of expanding my full-stack skills and am currently using it in my StudyTrack project to streamline client-server communication."
    },
    {
      "name": "Express.js",
      "path": "/express-logo.png",
      "description": "I’m using Express.js for the backend of my StudyTrack project to gain experience with building APIs and handling routing logic in a Node.js environment."
    },
    {
      "name": "Supabase",
      "path": "/supabase-logo.png",
      "description": "I’m using Supabase as the database for my Factor Tree App and Football Stats Visualizer."
    },
    // {
    //   "name": "MongoDB",
    //   "path": "/mongodb-logo.webp",
    //   "description": "As part of the backend stack for StudyTrack, I'm working with MongoDB to store and query application data in a document-oriented format."
    // },
    {
      "name": "D3.js",
      "path": "/d3-logo.png",
      "description": "I use D3.js for frontend data visualizations in both my work at TrialTrace and in my stock prediction project. It’s my go-to for rendering interactive, dynamic charts."
    },
    // {
    //   "name": "NumPy",
    //   "path": "/numpy-logo-trans.png",
    //   "description": "I use NumPy for numerical operations and matrix computations in my machine learning work, originally learned through the Dataquest curriculum."
    // },
    {
      "name": "Pandas",
      "path": "/pandas-logo.png",
      "description": "I use Pandas for data cleaning and transformation in my machine learning backend, with initial training from Dataquest and continued practice in personal projects."
    },
    {
      "name": "PyTorch",
      "path": "/pytorch-logo.webp",
      "description": "I'm currently learning PyTorch to build more advanced neural networks for my stock prediction project, transitioning beyond the capabilities of scikit-learn."
    }
  ]
}

const SkillsPage = () => {
  const { title } = skillsPageText
  const theme = useTheme();

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const popoverAnchor = useRef<HTMLDivElement | null>(null);
  const [popoverText, setPopoverText] = useState<string | null>(null);

  const handleSkillClick = (event: React.MouseEvent<HTMLDivElement>, skillName: string, description: string) => {

    if (selectedSkill === skillName) {
      // If clicking the same skill, close it
      setSelectedSkill(null);
      setPopoverText(null);
      popoverAnchor.current = null;
    } else {
      // If clicking a different skill, select it
      setSelectedSkill(skillName);
      setPopoverText(description);
      popoverAnchor.current = event.currentTarget as HTMLDivElement;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the popover anchor
      console.log('target ',event.target)
      if (
        Array.from((event.target as HTMLElement).classList).some(
          (className) => className.includes('MuiTypography') || className.startsWith('css-')
        )
      ) {
        return; // Ignore the click if any class matches the condition
      }      
      if (
        popoverAnchor.current &&
        !popoverAnchor.current.contains(event.target as Node)
      ) {
        setSelectedSkill(null);
        setPopoverText(null);
        popoverAnchor.current = null;
      }
    };
  
    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);
  
    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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