import './Otolaryngologist.css';
import Contact from '../../Shared/Contact';
import OtoSec1 from './Sections/OtoSec1';
import OtoSec2 from './Sections/OtoSec2';
import OtoSec3 from './Sections/OtoSec3';

function Otolaryngologist(otoPath) {
  const {newPath} = otoPath;

  return (
    <div className='oto'>
      <OtoSec1 />
      <OtoSec2 />
      <OtoSec3 />
      <Contact newPath={newPath} />
    </div>
  );
}

export default Otolaryngologist;
