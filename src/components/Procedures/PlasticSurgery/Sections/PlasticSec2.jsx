import face1 from '/face1.avif';
import face2 from '/face2.avif';
import body1 from '/body1.avif';
import body2 from '/body2.avif';
import beauty1 from '/beauty1.avif';
import beauty2 from '/beauty2.avif';

function Section2() {
  return (
    <div className='plastic__section2'>
      <div className='plastic__approaches'>
        <div className='plastic__approaches__item'>
          <img className='plastic__approaches__img' src={face1} />
        </div>
        <div className='plastic__approaches__item'>
          <h2 className='plastic__approaches__tittle'>Face</h2>
          <p className='plastic__approaches__p'>
            Rhinoplasty, Blepharoplasty, Facelift, Facial Liposuction, Otoplasty
          </p>
        </div>
        <div className='plastic__approaches__item'>
          <img className='plastic__approaches__img' src={face2} />
        </div>
        <div className='plastic__approaches__item'>
          <img className='plastic__approaches__img' src={body1} />
        </div>
        <div className='plastic__approaches__item'>
          <h2 className='plastic__approaches__tittle'>Body Procedures</h2>
          <p className='plastic__approaches__p'>
            Liposuction, Abdominoplasty, Breast augmentation, Breast reduction,
            Breast lift, Body contouring surgery after weight loss
          </p>
        </div>
        <div className='plastic__approaches__item'>
          <img className='plastic__approaches__img' src={body2} />
        </div>
        <div className='plastic__approaches__item'>
          <img className='plastic__approaches__img' src={beauty1} />
        </div>
        <div className='plastic__approaches__item'>
          <h2 className='plastic__approaches__tittle'>
            Non-Surgical Rejuvenation Procedures
          </h2>
          <p className='plastic__approaches__p'>
            Dermal fillers such as hyaluronic acid, Laser facial rejuvenation
            treatments, Chemical peels
          </p>
        </div>
        <div className='plastic__approaches__item'>
          <img className='plastic__approaches__img' src={beauty2} />
        </div>
      </div>
    </div>
  );
}

export default Section2;
