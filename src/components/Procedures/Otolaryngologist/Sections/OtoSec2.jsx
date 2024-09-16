import rhinoplasty from '/rhinoplasty.png';
import septoplasty from '/septoplasty.png';
import bichectomy from '/bichectomy.png';
import blepharoplasty from '/blepharoplasty.png';
import otoplasty from '/otoplasty.png';
import tonsillectomy from '/tonsillectomy.png';
import {motion} from 'framer-motion';

function OtoSec2() {
  // Framer Motion Variants //
  const iconBoxAnimation = {
    start: {opacity: 0, y: -50},
    end: {opacity: 1, y: 0, transition: {delay: 0.5, duration: 0.5}},
  };
  return (
    <div className='oto__section2'>
      <motion.div
        className='oto__icon__box'
        // Framer Motion Attributes //
        variants={iconBoxAnimation}
        initial='start'
        whileInView='start'
        viewport={{once: true}}
      >
        <div className='oto__item'>
          <img className='oto__icon' src={rhinoplasty} />
          <span className='oto__span'>Rhinoplasty</span>
          <div className='oto__item__text'>
            <p className='oto__icon__p'>
              Rhinoplasty is a surgery in which the shape of the nose is
              modified. The reason for rhinoplasty may be to change the
              appearance of the nose, to improve breathing, or both.
            </p>
          </div>
        </div>
        <div className='oto__item'>
          <img className='oto__icon' src={septoplasty} />
          <span className='oto__span'>Septoplasty</span>
          <div className='oto__item__text'>
            <p className='oto__icon__p'>
              Septoplasty is a common surgery that is carried out to correct
              anatomical problems of different natures in the nasal septum,
              which represents the structure inside the nose that separates it
              into two nostrils or chambers.
            </p>
          </div>
        </div>
        <div className='oto__item'>
          <img className='oto__icon' src={bichectomy} />
          <span className='oto__span'>Bichectomy</span>
          <div className='oto__item__text'>
            <p className='oto__icon__p'>
              It is a surgical intervention that consists of the extraction of
              the Bichat balls or bags. As it has been proven that they are only
              fat and not glands that only give volume to the face, this
              operation can be done.
            </p>
          </div>
        </div>
        <div className='oto__item'>
          <img className='oto__icon' src={blepharoplasty} />
          <span className='oto__span'>Blepharoplasty</span>
          <div className='oto__item__text'>
            <p className='oto__icon__p'>
              Aesthetic blepharoplasty aims to remove fat and excess skin and
              muscle from the upper and lower eyelids, with the aim of
              correcting the effects of facial aging.
            </p>
          </div>
        </div>
        <div className='oto__item'>
          <img className='oto__icon' src={otoplasty} />
          <span className='oto__span'>Otoplasty</span>
          <div className='oto__item__text'>
            <p className='oto__icon__p'>
              Otoplasty is surgery performed to reposition protruding or
              &quot;protruding&quot; ears to a more normal position, closer to
              the head, or to reduce the size of large ears.
            </p>
          </div>
        </div>
        <div className='oto__item'>
          <img className='oto__icon' src={tonsillectomy} />
          <span className='oto__span'>Tonsillectomy</span>
          <div className='oto__item__text'>
            <p className='oto__icon__p'>
              A tonsillectomy is surgery to remove the tonsils. Tonsils are
              lumps of tissue located on either side at the back of the throat
              and help the immune system protect the body from infection.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OtoSec2;
