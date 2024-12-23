import textJson from '../assets/site_text.json';
import TitleText from './TitleText';

const ContactPage = () => {
  const contactPageText = textJson.contact
  const { title } = contactPageText
  return (
    <div>
      <TitleText title={title} />
    </div>
  );
};
  
  export default ContactPage;