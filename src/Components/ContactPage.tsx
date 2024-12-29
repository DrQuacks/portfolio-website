import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ContactListItem from './ContactListItem';

const ContactPage = () => {
  const contactPageText = textJson.contact
  const { title } = contactPageText
  const iconSize = 60
  return (
    <div className='container'>
      <TitleText title={title} />
      <div className='contactBody'>
        <div className='contactColumnLeft'>
          <Box sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
            <List>
              <ContactListItem content={contactPageText.email} url={"mailto:"+contactPageText.email} icon={<EmailIcon sx={{ fontSize: iconSize }}/>} />
              <ContactListItem content={contactPageText.linkedin} url={"https://"+contactPageText.linkedin} icon={<LinkedInIcon sx={{ fontSize: iconSize }}/>} />
            </List>
          </Box>
        </div>
        <div className='contactColumnRight'>
          <Box sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
            <List>
              <ContactListItem content={contactPageText.github} url={"https://"+contactPageText.github} icon={<GitHubIcon sx={{ fontSize: iconSize }}/>} />
              <ContactListItem content={contactPageText.location} url={"https://www.google.com/maps?api=1&query=San+Francisco"} icon={<LocationCityIcon sx={{ fontSize: iconSize }}/>} />
            </List>
          </Box>
        </div>
      </div>
    </div>
  );
};
  
  export default ContactPage;