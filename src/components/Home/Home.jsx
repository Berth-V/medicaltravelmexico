import './Home.css';
import HomeSec1 from './Sections/HomeSec1';
import HomeSec2 from './Sections/HomeSec2';
import HomeSec3 from './Sections/HomeSec3';
import HomeSec4 from './Sections/HomeSec4';
import HomeSec5 from './Sections/HomeSec5';

function Home() {
  return (
    <div className='home'>
      <HomeSec1 />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <HomeSec5 />
    </div>
  );
}

export default Home;
