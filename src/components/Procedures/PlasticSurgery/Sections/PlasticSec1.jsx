import bata from '/bata.avif';
import {motion} from 'framer-motion';

function PlasticSec1() {
  // Framer Motion Variants //
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
      className='plastic__section1'
      // Framer Motion Attributes //
      variants={introductionAnimation}
      initial='start'
      animate='end'
    >
      <motion.div className='plastic__card' variants={introductionAnimation}>
        <motion.img
          className='plastic__img'
          // Framer Motion Attributes //
          src={bata}
          variants={introductionAnimation}
        />
        <div className='plastic__text'>
          <motion.h2
            className='plastic__procedure'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Plastic Surgery
          </motion.h2>
          <motion.h2
            className='plastic__doctor__name'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Dr.
          </motion.h2>
          <motion.p
            className='plastic__description'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            The search for beauty and self-confidence is an aspiration Sharedd
            by many people. As a plastic surgeon, my goal is to help patients
            achieve that desired look safely and naturally.
            <br />
            In my extensive career, I have dedicated myself to providing quality
            treatments and procedures that improve the aesthetics and
            self-esteem of my patients.
            <br />
            From facial procedures that rejuvenate and beautify to body surgery
            that sculpts and enhances the figure, my approach is to customize
            each treatment to meet my patients individual needs and desires. I
            firmly believe that plastic surgery should be an experience where
            patients feel heard and understood every step of the process.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PlasticSec1;
