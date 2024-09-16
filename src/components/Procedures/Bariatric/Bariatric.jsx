import './Bariatric.css';
import BariatricSec1 from './Sections/BariatricSec1';
import BariatricSec2 from './Sections/BariatricSec2';
import BariatricSec3 from './Sections/BariatricSec3';
import BariatricSec4 from './Sections/BariatricSec4';
import Contact from '../../Shared/Contact';

function Bariatric(bariatricPath) {
  const {newPath} = bariatricPath;

  return (
    <div className='bariatric'>
      <BariatricSec1 />
      <BariatricSec2 />
      <BariatricSec3 />
      <BariatricSec4 />
      <Contact newPath={newPath} />
    </div>
  );
}

export default Bariatric;
