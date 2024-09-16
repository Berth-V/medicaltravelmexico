import nasal1 from '/nasal1.avif';
import nasal2 from '/nasal2.avif';
import throat1 from '/throat1.avif';
import throat2 from '/throat2.avif';
import ear1 from '/ear1.avif';
import ear2 from '/ear2.avif';

function OtoSec3() {
  return (
    <div className='oto__section3'>
      <div className='oto__approaches'>
        <div className='oto__approaches__item'>
          <img className='oto__approaches__img' src={nasal1} />
        </div>
        <div className='oto__approaches__item'>
          <h2 className='oto__approaches__tittle'>Nasal Medicine</h2>
          <p className='oto__approaches__p'>
            Treatment from all Nasal Complications like Sinusitis, Alergic
            Rinitis, Nasal Polypos, Smell Abnormalities, Nasal Alergys.
          </p>
        </div>
        <div className='oto__approaches__item'>
          <img className='oto__approaches__img' src={nasal2} />
        </div>
        <div className='oto__approaches__item'>
          <img className='oto__approaches__img' src={throat1} />
        </div>
        <div className='oto__approaches__item'>
          <h2 className='oto__approaches__tittle'>Throat Medicine</h2>
          <p className='oto__approaches__p'>
            Treatmen of Tonsillitis, Pharyngitis, Laryngitis, Head and Neck
            Cancer, Dysphagia, Oral Candidiasis.
          </p>
        </div>
        <div className='oto__approaches__item'>
          <img className='oto__approaches__img' src={throat2} />
        </div>
        <div className='oto__approaches__item'>
          <img className='oto__approaches__img' src={ear1} />
        </div>
        <div className='oto__approaches__item'>
          <h2 className='oto__approaches__tittle'>Ear Medicine</h2>
          <p className='oto__approaches__p'>
            Treatment of Otitis, Eustachian tube dysfunction, Serous otitis
            media, Earwax and Earwax Wash
          </p>
        </div>
        <div className='oto__approaches__item'>
          <img className='oto__approaches__img' src={ear2} />
        </div>
      </div>
    </div>
  );
}

export default OtoSec3;
