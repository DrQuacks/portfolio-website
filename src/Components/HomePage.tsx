import textJson from '../assets/site_text.json';
import thinkingImageBW from '../assets/thinkingBW.jpg'; // Ensure you have the correct path to your image


const HomePage = () => {
  const homePageText = textJson.home
  const { title} = homePageText
  return (
    <div className='homeBody'>
      <div className='homeImage'>
        <img src={thinkingImageBW} alt='Me' />
      </div>
      <div className='homeTitleText'>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default HomePage;