import textJson from '../assets/site_text.json';
import TitleText from './TitleText';
import Typography from '@mui/material/Typography';

const AboutPage = () => {
  const aboutPageText = textJson.about
  const { title } = aboutPageText
  return (
    <div>
      <TitleText title={title} />
      <div className='aboutBody'>
        <div className='aboutText'>
          <Typography variant="h5" align="center">
            Near the end of grad school, I interned at Sandia National Labs working on lithium-air batteries, and happened
            to attend a talk on Machine Learning. After graduating, I decided to transition to coding. I worked as a tutor
            while I learned to code, and eventually began working at a startup named TrialTrace.  
            <br /><br />
            I currently work as the lead developer at TrialTrace, and also run my own private tutoring business.
            I have a PhD in Materials Engineering from University of Florida, 
            and undergrad degrees in Engineering, Mathematics, and Physics from Dartmouth College and Skidmore College.
            <br /><br />
            I write primarily front-end Typescript/Javascript using React and d3.js. I also have experience with Python,
            particularly in the context of Machine Learning with the NumPy, Pandas, Sci-kit Learn, and PyTorch libraries.
            <br /><br />
            Outside of coding and work, I like to cook and eat, write comedy and watch TV, and to play and watch sports.
            Specifically I enjoy skiing, playing basketball, and going on hikes. 
            Somewhere I've also got a violin sitting around I don't play enough anymore.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;