import './Destinations.css';
import FrontPage from './Sections/FrontPage';
import TravelBox from './Sections/TravelBox';
import Benefits from './Benefits';
import Contact from '../Shared/Contact';

function Destinations(destinationPath) {
  const {newPath} = destinationPath;

  return (
    <div className='destinations'>
      {/* Section 1 */}
      <FrontPage />
      {/* Section 2 */}
      <TravelBox />
      {/* Section 3 */}
      <Benefits />
      {/* Contact Section */}
      <Contact newPath={newPath} />
    </div>
  );
}

export default Destinations;
