import shoulder1 from '/shoulder1.avif';
import shoulder2 from '/shoulder2.avif';
import arm1 from '/arm1.avif';
import arm2 from '/arm2.avif';
import knee1 from '/knee1.avif';
import knee2 from '/knee2.avif';

function TraumaSec3() {
  return (
    <div className='trauma__section3'>
      <div className='trauma__approaches'>
        <div className='trauma__approaches__item'>
          <img className='trauma__approaches__img' src={shoulder1} />
        </div>
        <div className='trauma__approaches__item'>
          <h2 className='trauma__approaches__tittle'>SHOULDER</h2>
          <p className='trauma__approaches__p'>
            Rotator Cuff Disease, Shoulder Impingement,
          </p>
        </div>
        <div className='trauma__approaches__item'>
          <img className='trauma__approaches__img' src={shoulder2} />
        </div>
        <div className='trauma__approaches__item'>
          <img className='trauma__approaches__img' src={arm1} />
        </div>
        <div className='trauma__approaches__item'>
          <h2 className='trauma__approaches__tittle'>ARM</h2>
          <p className='trauma__approaches__p'>
            Cartilage Repair, Meniscus Repair, Radius and Ulna surgery, Tendon
            Management, Carpal Tunnel, etc.
          </p>
        </div>
        <div className='trauma__approaches__item'>
          <img className='trauma__approaches__img' src={arm2} />
        </div>
        <div className='trauma__approaches__item'>
          <img className='trauma__approaches__img' src={knee1} />
        </div>
        <div className='trauma__approaches__item'>
          <h2 className='trauma__approaches__tittle'>LEGS & FOOT</h2>
          <p className='trauma__approaches__p'>
            Flatfoot, Bunion, Femur Fracture, Metatarsal Base Fracture
          </p>
        </div>
        <div className='trauma__approaches__item'>
          <img className='trauma__approaches__img' src={knee2} />
        </div>
      </div>
    </div>
  );
}

export default TraumaSec3;
