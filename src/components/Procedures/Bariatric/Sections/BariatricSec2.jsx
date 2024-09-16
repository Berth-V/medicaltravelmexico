import gastricSleeve from '/gastric sleeve.png';
import baipas from '/baipas.png';
import biliopancreatic from '/biliopancreatic.png';
import {motion} from 'framer-motion';

function BariatricSec2() {
  // Framer Motion Variants //
  const itemAnimation = {
    start: {opacity: 0, y: -50},
    end: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <div className='bariatric__section2'>
      <div className='bariatric__icon__box'>
        <motion.div
          className='bariatric__item'
          // Framer Motion Attributes //
          variants={itemAnimation}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
        >
          <img className='bariatric__icon' src={gastricSleeve} />
          <span className='bariatric__span'>Gastric Sleeve</span>
          <div className='bariatric__item__text'>
            <p className='bariatric__icon__p'>
              In this operation, a surgeon removes part of the stomach and makes
              a narrow tube or &quot;sleeve&quot; out of the rest.
            </p>
          </div>
        </motion.div>
        <motion.div
          className='bariatric__item'
          // Framer Motion Attributes //
          variants={itemAnimation}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
        >
          <img className='bariatric__icon' src={baipas} />
          <span className='bariatric__span'>Gastric and Roux Baipas</span>
          <div className='bariatric__item__text'>
            <p className='bariatric__icon__p'>
              Most commonly performed weight loss procedure in the United
              States. It has been practiced for over 30 years and provides an
              excellent balance between weight loss and manageable side effects.
            </p>
          </div>
        </motion.div>
        <motion.div
          className='bariatric__item'
          // Framer Motion Attributes //
          variants={itemAnimation}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
        >
          <img className='bariatric__icon' src={biliopancreatic} />
          <span className='bariatric__span'>
            Biliopancreatic Diversion with Duodenal Switch
          </span>
          <div className='bariatric__item__text'>
            <p className='bariatric__icon__p'>
              It is usually performed in a single procedure; however, in certain
              circumstances, it can be performed in two separate operations:
              first, a sleeve gastrectomy, and then a bowel bypass, once weight
              loss has begun.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BariatricSec2;
