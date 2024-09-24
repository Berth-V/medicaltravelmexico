import airplane from '/airplane.avif';
import travel1 from '/section4(1).avif';
import travel2 from '/section4(2).avif';
import {airplaneAnimations} from '../framerMotionVariants';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

function HomeSec4() {
  const ref = useRef();
  const isInView = useInView(ref, {once: true, amount: 0.4});
  return (
    <section className='section4' ref={ref}>
      <motion.img
        className='airplane'
        src={airplane}
        alt='travel airplane'
        // Framer Motion Attributes //
        animate={{x: isInView ? 0 : -2000}}
        transition={{duration: 0.8, delay: 0.3}}
        viewport={{once: true}}
      />
      <motion.div
        className='section4__container'
        // Framer Motion Attributes //
        variants={airplaneAnimations}
        initial='start'
        whileInView='end'
        viewport={{once: true, amount: 0.5}}
      >
        <motion.div
          className='section4__pic'
          // Framer Motion Attributes //
          variants={airplaneAnimations}
        >
          <img className='section4__img' src={travel1} />
        </motion.div>
        <motion.div
          className='section4__pic'
          // Framer Motion Attributes //
          variants={airplaneAnimations}
        >
          <div className='section4__text'>
            <p className='section4__p'>
              <b>
                Travel to the most iconic places on Tj, SD, enjoy a comfortable
                place and then come to us for help to you with your health
              </b>
            </p>
          </div>
        </motion.div>
        <motion.div className='section4__pic' variants={airplaneAnimations}>
          <img className='section4__img' src={travel2} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeSec4;
