import textJson from '../assets/site_text.json';
import TitleText from './TitleText';

const ProjectsPage = () => {
  const projectsPageText = textJson.projects
  const { title } = projectsPageText
  return (
    <div>
      <TitleText title={title} />
    </div>
  );
};
  
  export default ProjectsPage;