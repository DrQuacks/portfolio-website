import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ContactListItem = ({ content,icon,url }:{content:string,icon:JSX.Element,url:string}) => { 

  return (
    <ListItem component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{ fontSize: 25 , color: "gray" }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={content} sx={{ '& .MuiTypography-root': { fontSize: 'inherit' } }} />
    </ListItem>
  );
}

export default ContactListItem;