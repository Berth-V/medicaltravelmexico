import './Procedures.css';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import {drInfo} from './drData';

function Procedures() {
  // Framer Motion Variants//
  const cardAnimation = {
    start: {opacity: 0, x: 100, y: -100},
    end: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {staggerChildren: 0.2},
    },
  };

  return (
    <div className='procedures'>
      <h2 className='procedures__tittle'>Choose your Doctor</h2>
      <motion.div
        className='cards__container'
        // Framer Motion Attributes //
        variants={cardAnimation}
        initial='start'
        animate='end'
      >
        {drInfo.map((dr, index) => (
          <NavLink className='card__link' to={dr.navTo} key={index}>
            <motion.div
              className='card'
              // Framer Motion Attributes //
              variants={cardAnimation}
              whileHover={{scale: 1.02}}
            >
              <img
                className={
                  dr.tittle == 'Plastic Surgery'
                    ? 'card__img--bata'
                    : 'card__img'
                }
                src={dr.imgSrc}
              />
              <h3 className='speciality__tittle'>{dr.tittle}</h3>
              <span className='doctor__name'>{dr.drName}</span>
              <p className='card__p'>{dr.description}</p>
            </motion.div>
          </NavLink>
        ))}
      </motion.div>
    </div>
  );
}

export default Procedures;
