import type { NextPage } from 'next';
import HomePage from '../components/HomePage';
import AboutMe from '../components/AboutMe';
import ProfessionalSkills from '../components/ProfessionalSkills';
import WorkExperience from '../components/WorkExperience';
// import Skills from '../components/Skills';
// import Experience from '../components/Experience';
// import Projects from '../components/Projects';
// import Expertise from '../components/Expertise';
import Qualification from '../components/Qualification';
import Hobbies from '../components/Hobbies';
import Education from '../components/Education';
// import MapApp from '../components/MapApp';

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <ProfessionalSkills />
      <WorkExperience />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Projects /> */}
      {/* <Expertise /> */}
      <Education />
      <Qualification />
      <Hobbies /> 
      {/* <MapApp />  */}
      {/*  */}
    </div>
  );
  
};

export default Home;
