import sahid from '/sahid.avif';
import {motion} from 'framer-motion';

function OtoSec1() {
  //Framer Motion Variants//
  const introductionAnimation = {
    start: {opacity: 0, x: 100},
    end: {
      opacity: 1,
      x: 0,
      transition: {staggerChildren: 0.2},
    },
  };
  return (
    <motion.div
      className='oto__section1'
      // Framer Motion Attributes //
      variants={introductionAnimation}
      initial='start'
      animate='end'
    >
      <motion.div className='oto__card' variants={introductionAnimation}>
        <motion.img
          className='oto__img'
          src={sahid}
          // Framer Motion Attributes //
          variants={introductionAnimation}
        />
        <div className='oto__text'>
          <motion.h2
            className='oto__procedure'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Otolaryngologist
          </motion.h2>
          <motion.h2
            className='oto__doctor__name'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Dr. Sahid Singh
          </motion.h2>
          <motion.p
            className='oto__description'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Your hearing and respiratory well-being is in good hands. As an ENT
            doctor, my focus is providing effective solutions for ear, nose and
            throat problems. Our treatments and procedures are designed to
            improve your quality of life and overall well-being.
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
  );
}

export default OtoSec1;
