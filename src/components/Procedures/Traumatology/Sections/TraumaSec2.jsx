import spine from '/spine.png';
import hip from '/hip.png';
import fracture from '/fracture.png';
import {motion} from 'framer-motion';

function TraumaSec2() {
  // Framer Motion Variants //
  const iconBoxAnimation = {
    start: {
      opacity: 0,
      y: -50,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {delay: 0.5, duration: 0.5},
    },
  };
  return (
    <div className='trauma__section2'>
      <motion.div
        className='trauma__icon__box'
        // Framer Motion Attributes //
        variants={iconBoxAnimation}
        initial='start'
        whileInView='end'
        viewport={{once: true}}
      >
        <div className='trauma__item'>
          <img className='trauma__icon' src={spine} />
          <span className='trauma__span'>Spinal Procedures</span>
          <div className='trauma__item__text'>
            <p className='trauma__icon__p'>
              They are performed on the spine, from anti-inflammatory or
              platelet-rich plasma infiltrations, to performing heat
              denervations to relieve spinal column pain. Herniated disc
              interventions and other surgical procedures are also performed.
            </p>
          </div>
        </div>
        <div className='trauma__item'>
          <img className='trauma__icon' src={hip} />
          <span className='trauma__span'>Total Knee & Hip Replace</span>
          <div className='trauma__item__text'>
            <p className='trauma__icon__p'>
              Hip and knee prostheses, all our prostheses are of a high quality,
              using the same brand used by doctors in the United States and
              Canada, all for a lower price.
            </p>
          </div>
        </div>
        <div className='trauma__item'>
          <img className='trauma__icon' src={fracture} />
          <span className='trauma__span'>Fractures</span>
          <div className='trauma__item__text'>
            <p className='trauma__icon__p'>
              Intervention of fractures of the whole body, arms, legs, knees,
              ankles, clavicle, femur, tibia, etc.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TraumaSec2;
