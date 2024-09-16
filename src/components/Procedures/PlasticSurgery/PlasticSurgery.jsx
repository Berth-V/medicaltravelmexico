import './PlasticSurgery.css';
import PlasticSec1 from './Sections/PlasticSec1';
import PlasticSec2 from './Sections/PlasticSec2';
import Contact from '../../Shared/Contact';

function PlasticSurgery(plasticPath) {
  const {newPath} = plasticPath;
  console.log(newPath);

  return (
    <div className='plastic'>
      <PlasticSec1 />
      <PlasticSec2 />
      <Contact newPath={newPath} />
    </div>
  );
}

export default PlasticSurgery;
