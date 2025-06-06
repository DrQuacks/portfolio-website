import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ContactListItem from './ContactListItem';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';

const ContactPage = () => {
  const contactPageText = textJson.contact
  const { title } = contactPageText
  const iconSize = 50

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <Box sx={{ width: '80%' }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            <Grid size={6}>
              <Item><ContactListItem content={contactPageText.email} url={"mailto:"+contactPageText.email} icon={<EmailIcon sx={{ fontSize: iconSize }}/>} /></Item>
            </Grid>
            <Grid size={6}>
              <Item> <ContactListItem content={contactPageText.github} url={"https://"+contactPageText.github} icon={<GitHubIcon sx={{ fontSize: iconSize }}/>} /></Item>
            </Grid>
            <Grid size={6}>
              <Item><ContactListItem content={contactPageText.linkedin} url={"https://"+contactPageText.linkedin} icon={<LinkedInIcon sx={{ fontSize: iconSize }}/>} /></Item>
            </Grid>
            <Grid size={6}>
              <Item><ContactListItem content={contactPageText.location} url={"https://www.google.com/maps?api=1&query=San+Francisco"} icon={<LocationCityIcon sx={{ fontSize: iconSize }}/>} /></Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
  
  export default ContactPage;