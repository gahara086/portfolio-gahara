import type { NextPage } from 'next';
import HomePage from '../components/HomePage';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Expertise from '../components/Expertise';
import Hobbies from '../components/Hobbies';
import MapApp from '../components/MapApp';

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
      <Skills />
      <Experience />
      <Projects />
      <Expertise />
      <Hobbies />
      <MapApp />
    </div>
  );
};

export default Home;
