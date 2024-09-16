import './Traumatology.css';
import Contact from '../../Shared/Contact';
import TraumaSec1 from './Sections/TraumaSec1';
import TraumaSec2 from './Sections/TraumaSec2';
import TraumaSec3 from './Sections/TraumaSec3';
import TraumaSec4 from './Sections/TraumaSec4';

function Traumatology(traumaPath) {
  const {newPath} = traumaPath;

  return (
    <div className='trauma'>
      <TraumaSec1 />
      <TraumaSec2 />
      <TraumaSec3 />
      <TraumaSec4 />
      <Contact newPath={newPath} />
    </div>
  );
}

export default Traumatology;
