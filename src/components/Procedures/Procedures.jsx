import './Procedures.css';
import card from '/dr hans.jpeg';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
function Procedures() {
  //Framer Motion//
  const cardAnimation={
    start:{opacity:0,x:100,y:-100},
    end:{
      opacity:1,x:0,y:0,
      transition:{staggerChildren:0.2}
    }
  }
  return (
    <div className='procedures'>
      <h2 className='procedures__tittle'>Choose your Doctor</h2>
      <motion.div className='cards__container'
        variants={cardAnimation}
        initial='start'
        animate='end'
      >
        <NavLink className='card__link'
          to='/bariatric'
        >
          <motion.div className='card'
            variants={cardAnimation}
            whileHover={{scale: 1.02}}
          >
            <img className='card__img'
              src={card}
            />
            <h3 className='speciality__tittle'>
              Bariatric
            </h3>
            <span className='doctor__name'>
              Dr. Hans Ruiz
            </span>
            <p className='card__p'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
              consectetur a accusantium porro impedit, est rerum? Tenetur vero 
              deleniti, provident officia
            </p>
          </motion.div>
        </NavLink>
        <NavLink className='card__link'
          to='/plasticsurgery'
        >
          <motion.div className='card'
            variants={cardAnimation}
            whileHover={{scale: 1.02}}
          >
            <img className='card__img' 
              src={card}
            />
            <h3 className='speciality__tittle'>
              Plastic Surgery
            </h3>
            <span className='doctor__name'>
              Dr. Hans Ruiz
            </span>
            <p className='card__p'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
              consectetur a accusantium porro impedit, est rerum? Tenetur vero 
              deleniti, provident officia
            </p>
          </motion.div>
        </NavLink>
        <NavLink className='card__link'
          to='/traumatology'
        >
          <motion.div className='card'
            variants={cardAnimation}
            whileHover={{scale: 1.02}}
          >
            <img className='card__img'
              src={card}
            />
            <h3 className='speciality__tittle'>
              Traumatology
            </h3>
            <span className='doctor__name'>
              Dr. Hans Ruiz
            </span>
            <p className='card__p'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
              consectetur a accusantium porro impedit, est rerum? Tenetur vero 
              deleniti, provident officia
            </p>
          </motion.div>
        </NavLink>
        <NavLink className='card__link'
          to='/otolaryngologist'
        >
          <motion.div className='card'
            variants={cardAnimation}
            whileHover={{scale: 1.02}}
          >
            <img className='card__img'
              src={card}
            />
            <h3 className='speciality__tittle'>
              Otolaryngologist
            </h3>
            <span className='doctor__name'>
              Dr. Hans Ruiz
            </span>
            <p className='card__p'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
              consectetur a accusantium porro impedit, est rerum? Tenetur vero 
              deleniti, provident officia
            </p>
          </motion.div>
        </NavLink> 
      </motion.div>
    </div>
  )
}

export default Procedures;