import hotel from '/hotel.avif';
import {travelingAnimations} from '../framerMotionVariants';
import {motion} from 'framer-motion';

function HomeSec5() {
  return (
    <section className='home__section5'>
      <div
        className='section5__background'
        style={{
          background: `url(${hotel}) no-repeat center/var(--section4-background-size)`,
        }}
      >
        <motion.div
          className='section5__container'
          variants={travelingAnimations}
          initial='start'
          whileInView='end'
          viewport={{once: true, amount: 1}}
        >
          <h2 className='section5__h2'>How is traveling with us?</h2>
          <p className='section5__p'>
            The packages are completely personalized, regardless of whether you
            only want to temporarily lodging to solve your health, or if you
            decide to get a tour to any of our destinations.
            <br />
            You are free to choose if you want a &quot;doctor visit + travel
            package&quot;, just visit the doctor, or just travel, we take care
            of you from the moment you leave your city.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeSec5;
