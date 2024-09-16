import narda from '/narda.avif';
import {motion} from 'framer-motion';

function BariatricSec1() {
  const introAnimation = {
    start: {opacity: 0, x: 100},
    end: {
      opacity: 1,
      x: 0,
      transition: {staggerChildren: 0.2},
    },
  };
  return (
    <div>
      <motion.div
        className='bariatric__section1'
        // Framer Motion Attributes //
        variants={introAnimation}
        initial='start'
        animate='end'
      >
        <motion.div
          className='bariatric__card'
          // Framer Motion Attributes //
          variants={introAnimation}
        >
          <motion.img
            className='bariatric__img'
            src={narda}
            // Framer Motion Attributes //
            variants={introAnimation}
          />
          <div className='bariatric__text'>
            <motion.h2
              className='bariatric__procedure'
              // Framer Motion Attributes //
              variants={introAnimation}
            >
              Bariatric
            </motion.h2>
            <motion.h2
              className='bariatric__doctor__name'
              // Framer Motion Attributes //
              variants={introAnimation}
            >
              Dr. Narda Carrera
            </motion.h2>
            <motion.p
              className='bariatric__description'
              // Framer Motion Attributes //
              variants={introAnimation}
            >
              In the field of Bariatrics, we are dedicated to transforming lives
              and improving health. As a specialist, my primary focus is helping
              people achieve healthy and sustainable weight loss, which in turn
              significantly improves their quality of life.
              <br />
              Weight loss is a personal journey, and we are here to provide the
              support you need every step of the way. Our highly skilled and
              committed team works closely with patients to ensure successful,
              long-lasting results.
              <br />
              At our clinic, you will find a welcoming environment and a
              dedicated team who care deeply about your well-being.
              <br />
              Together, we can achieve a healthier future.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BariatricSec1;
