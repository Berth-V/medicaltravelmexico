import other from '/other.avif';
import {motion} from 'framer-motion';

function BariatricSec4() {
  // Framer Motion Variants //
  const otherAnimation = {
    start: {opacity: 0, x: 50},
    end: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className='bariatric__section4'>
      <img className='bariatric__other__img' src={other} />
      <div className='bariatric__other'>
        <motion.h2
          className='bariatric__other__h2'
          // Framer Motion Attributes //
          variants={otherAnimation}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
        >
          Other Treatments
        </motion.h2>
        <motion.p
          className='bariatric__other__p'
          // Framer Motion Attributes //
          variants={otherAnimation}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
        >
          -Goiter
          <br />
          -Morbid Obesity
          <br />
          -Acute Pancreatitis
          <br />
          -Chronic Cholecystitis
        </motion.p>
      </div>
    </div>
  );
}

export default BariatricSec4;
