import airplane from '/airplane.png';
import travel1 from '/section4(1).jpg';
import travel2 from '/section4(2).jpg';
import {airplaneAnimations} from '../framerMotionVariants';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

function HomeSec4() {
  const ref = useRef();
  const isInView = useInView(ref, {once: true, amount: 0.4});
  return (
    <section className='home__section4' ref={ref}>
      <motion.img
        className='airplane'
        src={airplane}
        alt='travel airplane'
        // Framer Morion Attributtes //
        animate={{x: isInView ? 0 : -2000}}
        transition={{duration: 0.8, delay: 0.3}}
        viewport={{once: true}}
      />
      <motion.div
        className='home__section4__container'
        // Framer Morion Attributtes //
        variants={airplaneAnimations}
        initial='start'
        whileInView='end'
        viewport={{once: true, amount: 0.5}}
      >
        <motion.div
          className='home__section4__items'
          // Framer Morion Attributtes //
          variants={airplaneAnimations}
        >
          <img className='home__section4__img' src={travel1} />
        </motion.div>
        <motion.div
          className='home__section4__items'
          // Framer Morion Attributtes //
          variants={airplaneAnimations}
        >
          <div className='home__section4__text'>
            <p className='home__section4__p'>
              <b>
                Travel to the most iconic places on Tj, SD, enjoy a comfortable
                place and then come to us for help to you with your health
              </b>
            </p>
          </div>
        </motion.div>
        <motion.div
          className='home__section4__items'
          variants={airplaneAnimations}
        >
          <img className='home__section4__img' src={travel2} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeSec4;
