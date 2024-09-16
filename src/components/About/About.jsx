import './About.css';
import mission from '/mission.avif';
import vision from '/vision.avif';
import {motion} from 'framer-motion';

function About() {
  // Framer Motion Variants  //
  const rightToLeftAn = {
    start: {x: 100, opacity: 0},
    end: {x: 0, opacity: 1, transition: {delay: 0.3}},
  };
  const leftToRightAn = {
    start: {x: -100, opacity: 0},
    end: {x: 0, opacity: 1, transition: {delay: 0.3}},
  };
  return (
    <div className='about'>
      <div className='about__description'>
        <motion.h1
          className='about__h1'
          variants={rightToLeftAn}
          initial='start'
          whileInView='end'
        >
          About Medical Travel México
        </motion.h1>
        <motion.p
          className='about__p'
          // Framer Motion Attributes //
          variants={leftToRightAn}
          initial='start'
          whileInView='end'
        >
          Medical Travel Mexico is a binational medical travel facilitation
          company founded in the city of Tijuana, Baja Caligornia.
          <br />
          How We Achieve It:
          <br />
          - We listen to the needs of customers.
          <br />
          - We are present throughout the process so that the patient feels
          accompanied.
          <br />
          - We establish accurate communication between the client, the doctors
          and the clinic before the trip begins.
          <br />
          - We offer high quality doctors with certified medical facilities.
          <br />- We have alliances with the best tourist providers.
        </motion.p>
      </div>
      <div className='mission__description'>
        <motion.div
          className='mission__item'
          // Framer Motion Attributes //
          variants={rightToLeftAn}
          initial='start'
          whileInView='end'
        >
          <h3 className='mission__h3'>Mission</h3>
          <p className='mission__p'>
            The goal of Medical Travel Mexico is to make the best specialists
            available to medical tourists for their needs, giving added value to
            their trip through the planning and organization of their health
            trip, making them feel accompanied and guided throughout their
            entire journey stay. We work to exceed expectations and create a
            relaxed and confident environment in your medical care.
          </p>
          <img className='mission__img' src={mission} />
        </motion.div>
        <motion.div
          className='mission__item'
          // Framer Motion Attributes //
          variants={leftToRightAn}
          initial='start'
          whileInView='end'
        >
          <h3 className='mission__h3'>Vision</h3>
          <p className='mission__p'>
            Consolidate ourselves in the national and international market and
            expand the network of doctors to provide patients who travel for
            medical tourism with more high-quality medical alternatives, meeting
            their expectations, offering them more personalized services,
            tailored to each medical tourist, to offer them a safe, responsible
            and innovative service with competitive rates in the market.
          </p>
          <img className='mission__img' src={vision} />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
