import {motion} from 'framer-motion';
import {whyComeAnimation} from '../framerMotionVariants';
import bonus from '/bonus.avif';

function HomeSec3() {
  return (
    <section className='home__section3'>
      <motion.div
        className='home__section3__container'
        // Framer Motion Attributes //
        variants={whyComeAnimation}
        initial='start'
        whileInView='end'
        viewport={{once: true, amount: 0.9}}
      >
        <h2 className='section3__h2'>Why Come Abroad?</h2>
        <br />
        <p className='section3__text'>
          -High Health Care Costs in Developed Countries
          <br />
          -Ease and Accessibility of International Travel
          <br />
          -Global Standards of Care and Technological Advances
          <br />
          -Communication Improvements
          <br />
          -Complications with health insurance
          <br />
          <br />
          People choose to seek medical treatment abroad due to the high costs
          of healthcare in their home countries, the ease of traveling
          internationally, rising global healthcare standards, and improved
          communications. Limited health insurance also plays an important role,
          as costs rise and coverage declines, medical tourism becomes an
          affordable alternative.
        </p>
      </motion.div>
      <hr className='section3__hr' />
      <img className='section3__img' src={bonus} />
    </section>
  );
}

export default HomeSec3;
