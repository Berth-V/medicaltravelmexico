import './Otolaryngologist.css';
import sahid from '/sahid.avif';
import nasal1 from '/nasal1.avif';
import nasal2 from '/nasal2.avif';
import throat1 from '/throat1.avif';
import throat2 from '/throat2.avif';
import ear1 from '/ear1.avif';
import ear2 from '/ear2.avif';
import rhinoplasty from '/rhinoplasty.png';
import septoplasty from '/septoplasty.png';
import bichectomy from '/bichectomy.png';
import blepharoplasty from '/blepharoplasty.png';
import otoplasty from '/otoplasty.png';
import tonsillectomy from '/tonsillectomy.png';
import Contact from '../../Share/Contact';
import {motion} from 'framer-motion';

function Otolaryngologist(otoPath) {
  //Framer Motion Values//
  const introductionAnimation = {
    start: {opacity: 0, x: 100},
    end: {
      opacity: 1,
      x: 0,
      transition: {staggerChildren: 0.2},
    },
  };
  const {newPath} = otoPath;

  return (
    <div className='oto'>
      <motion.div
        className='oto__section1'
        variants={introductionAnimation}
        initial='start'
        animate='end'
      >
        <motion.div className='oto__card' variants={introductionAnimation}>
          <motion.img
            className='oto__img'
            src={sahid}
            variants={introductionAnimation}
          />
          <div className='oto__text'>
            <motion.h2
              className='oto__procedure'
              variants={introductionAnimation}
            >
              Otolaryngologist
            </motion.h2>
            <motion.h2
              className='oto__doctor__name'
              variants={introductionAnimation}
            >
              Dr. Sahid Singh
            </motion.h2>
            <motion.p
              className='oto__description'
              variants={introductionAnimation}
            >
              Your hearing and respiratory well-being is in good hands. As an
              ENT doctor, my focus is providing effective solutions for ear,
              nose and throat problems. Our treatments and procedures are
              designed to improve your quality of life and overall well-being.
              <br />
              At my practice, you will find a caring and caring team who are
              committed to providing you with the highest level of medical care.{' '}
              <br />
              From first consultation to recovery, we are here to support you
              every step of the way.
              <br />
              My goal is to provide each patient with a personalized treatment
              plan that fits their individual needs and goals.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <div className='oto__section2'>
        <motion.div
          className='oto__icon__box'
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.5, duration: 0.5}}
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
                the Bichat balls or bags. As it has been proven that they are
                only fat and not glands that only give volume to the face, this
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
      <Contact newPath={newPath} />
    </div>
  );
}

export default Otolaryngologist;
