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
import Education from '../components/Education';
// import References from '../components/References';
import StudyGuide from '../components/StudyGuide';
import Hobbies from '../components/Hobbies';
// import MapApp from '../components/MapApp';
// import ProjectDetails from '../components/ProjectDetails';

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
      {/* <ProjectDetails />  */}
      <Education />
      <Qualification />
      {/* <References />  */}
      <StudyGuide /> 
      <Hobbies /> 
      {/* <MapApp />  */}
    </div>
  );

};

export default Home;
