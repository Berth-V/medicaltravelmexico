import './Home.css';
import HomeSec1 from './HomeSec1/HomeSec1';
import HomeSec2 from './HomeSec2/HomeSec2';
import HomeSec3 from './HomeSec3/HomeSec3';
import HomeSec4 from './HomeSec4/HomeSec4';
import HomeSec5 from './HomeSec5/HomeSec5';

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
