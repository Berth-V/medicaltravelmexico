import './PlasticSurgery.css';
import bata from '/bata.avif';
import face1 from '/face1.avif';
import face2 from '/face2.avif';
import body1 from '/body1.avif';
import body2 from '/body2.avif';
import beauty1 from '/beauty1.avif';
import beauty2 from '/beauty2.avif';
import {motion} from 'framer-motion';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {NavLink} from 'react-router-dom';

function PlasticSurgery() {
  const introductionAnimation={
    start: {opacity:0, x:100},
    end: {
      opacity:1, x:0,
      transition:{staggerChildren:0.2}
    }
  }

  return (
    <div className='plastic'>
      <motion.div className='plastic__section1'
        variants={introductionAnimation}
        initial='start'
        animate='end'
      >
        <motion.div className='plastic__card'
          variants={introductionAnimation}
        >
          <motion.img className='plastic__img' src={bata}
            variants={introductionAnimation}
          />
            <div className='plastic__text'>
              <motion.h2 className='plastic__procedure'

              variants={introductionAnimation}>
                Plastic Surgery
              </motion.h2>
              <motion.h2 className='plastic__doctor__name'

              variants={introductionAnimation}>
                Dr.
              </motion.h2>
              <motion.p className='plastic__description'
                variants={introductionAnimation}
              >
                The search for beauty and self-confidence is an aspiration 
                shared by many people. As a plastic surgeon, my goal is to 
                help patients achieve that desired look safely and naturally.<br/>
                In my extensive career, I have dedicated myself to providing 
                quality treatments and procedures that improve the aesthetics 
                and self-esteem of my patients.<br/>
                From facial procedures that rejuvenate and beautify to body 
                surgery that sculpts and enhances the figure, my approach is 
                to customize each treatment to meet my patients' individual 
                needs and desires. 
                I firmly believe that plastic surgery should be an experience 
                where patients feel heard and understood every step of the 
                process.
              </motion.p>
            </div>
        </motion.div>
      </motion.div>
      <div className='plastic__section2'>
        <div className='plastic__approaches'>
          <div className='plastic__approaches__item'>
            <img className='plastic__approaches__img' src={face1}/>
          </div>
          <div className='plastic__approaches__item'>
            <h2 className='plastic__approaches__tittle'>Face</h2>
            <p className='plastic__approaches__p'>
              Rhinoplasty, Blepharoplasty, Facelift, Facial Liposuction,
              Otoplasty
            </p>  
          </div>
          <div className='plastic__approaches__item'>
            <img className='plastic__approaches__img' src={face2}/>
          </div>
          <div className='plastic__approaches__item'>
            <img className='plastic__approaches__img' src={body1}/>
          </div>
          <div className='plastic__approaches__item'>
            <h2 className='plastic__approaches__tittle'>Body Procedures</h2>
            <p className='plastic__approaches__p'>
              Liposuction, Abdominoplasty, Breast augmentation,
              Breast reduction, Breast lift, Body contouring surgery 
              after weight loss
            </p>   
          </div>
          <div className='plastic__approaches__item'>
            <img className='plastic__approaches__img' src={body2}/>
          </div>
          <div className='plastic__approaches__item'>
            <img className='plastic__approaches__img' src={beauty1}/>
          </div>
          <div className='plastic__approaches__item'>
          <h2 className='plastic__approaches__tittle'>
            Non-Surgical Rejuvenation Procedures
          </h2>
            <p className='plastic__approaches__p'>
            Dermal fillers (such as hyaluronic acid), Laser facial rejuvenation treatments,
            Chemical peels
            </p>  
          </div>
          <div className='plastic__approaches__item'>
            <img className='plastic__approaches__img' src={beauty2}/>
          </div>
        </div>
      </div>
      <div className='plastic__contact'>
        <h2 className='plastic__contact__h2'>Contact Us</h2>
        <div className='plastic__contact__container'>
            <a className='plastic__contact__item'
              href='mailto:travelmedicalmx@gmail.com'
              target='_blank'
            >
              <IoIosMail className='plastic__contact__icon'/>
              <span className='plastic__contact__span'>
                E-Mail
              </span>
            </a>
            <a className='plastic__contact__item'
              href='https://wa.me/526981032939'
              target='_blank'
            >
              <IoLogoWhatsapp className='plastic__contact__icon'/>
              <span className='plastic__contact__span'>
                WhatsApp
              </span>
            </a>
            <a className='plastic__contact__item'
              href='https://www.instagram.com/medical.travel.mx/'
              target='_blank'
            >
              <AiFillInstagram className='plastic__contact__icon'/>
              <span className='plastic__contact__span'>
                Instagram
              </span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default PlasticSurgery
