import textJson from '../assets/site_text.json';

const HomePage = () => {
  const homePageText = textJson.home
  const { title, subtitle, description } = homePageText
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default HomePage;