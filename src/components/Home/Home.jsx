import './Home.css';
import portada from '/portada.avif';
import bariatric from '/bariatric icon.png';
import oto from '/oto icon.png';
import plastic from '/plastic icon.png';
import trauma from '/trauma icon.png';
import airplane from '/airplane.png';
import travel1 from '/section4(1).jpg';
import travel2 from '/section4(2).jpg';
import hotel from '/hotel.avif';
import bonus from '/bonus.avif';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';

function Home() {
  const ref = useRef();
  const isInView = useInView(ref, {once: true, amount: 0.4});
  //Framer Motion Variants//
  const frontPageAnimations = {
    start: {y: -100, opacity: 0},
    end: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };
  const proceduresCardsAnimation = {
    start: {y: -100, opacity: 0},
    end: {
      y: 0,
      opacity: 1,
      rotateY: [0, 360, 0],
      transition: {
        staggerChildren: 0.4,
        duration: 0.6,
      },
    },
  };
  const travelAnimations = {
    start: {y: 100, opacity: 0},
    end: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <div className='home'>
      <section
        className='home__section1'
        style={{
          background: `url(${portada}) no-repeat var(--home--backfround-pos)/var(--home-frontpage-size) #FCFCFC`,
        }}
      >
        <motion.div
          className='home__textBox'
          variants={frontPageAnimations}
          initial='start'
          whileInView='end'
          viewport={{once: true}}
        >
          <motion.h1 className='home__h1' variants={frontPageAnimations}>
            We are interested in your well-being
          </motion.h1>
          <motion.p className='home__p' variants={frontPageAnimations}>
            -Save up to 70% in any process
          </motion.p>
          <motion.p className='home__p' variants={frontPageAnimations}>
            -Certified Doctors
          </motion.p>
          <motion.p className='home__p' variants={frontPageAnimations}>
            -Faster Response
          </motion.p>
          <motion.p className='home__p' variants={frontPageAnimations}>
            -Completely personalized attention to each patient
          </motion.p>
          <motion.p className='home__p' variants={frontPageAnimations}>
            -Optional Travel Packages for pre or post-op
          </motion.p>
          <motion.p className='home__p' variants={frontPageAnimations}>
            US: +1 855 997 98 78
          </motion.p>
          <motion.p className='home__p' variants={frontPageAnimations}>
            MX: +52 668 275 09 77
          </motion.p>
          <motion.div
            className='home__icon__box'
            variants={frontPageAnimations}
          >
            <a
              className='home__icon__link'
              href='mailto:travelmedicalmx@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='home__icon__container'>
                <IoIosMail className='home__icon' />
                <span className='home__icon__span'>E-Mail</span>
              </div>
            </a>
            <a
              className='home__icon__link'
              href='https://wa.me/526981032939'
              target='_blank'
              rel='noreferrer'
            >
              <div className='home__icon__container'>
                <IoLogoWhatsapp className='home__icon' />
                <span className='home__icon__span'>Whatsapp</span>
              </div>
            </a>
            <a
              className='home__icon__link'
              href='https://www.instagram.com/medical.travel.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='home__icon__container'>
                <AiFillInstagram className='home__icon' />
                <span className='home__icon__span'>Instagram</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>
      <section className='home__section2'>
        <motion.div
          className='box'
          variants={proceduresCardsAnimation}
          initial='start'
          whileInView='end'
          viewport={{once: true, amount: 0.7}}
        >
          <motion.div className='item' variants={proceduresCardsAnimation}>
            <img className='box__icon' src={bariatric} />
            <h3 className='box__h3'>BARIATRIC</h3>
            <p className='box__parraph'>
              Bariatric Surgery is the set of surgical procedures performed with
              the aim of helping you lose weight and improve obesity-related
              diseases. And it is currently the treatment against obesity with
              the best results in weight loss and long-term weight maintenance.
            </p>
          </motion.div>
          <motion.div className='item' variants={proceduresCardsAnimation}>
            <img className='box__icon' src={trauma} />
            <h3 className='box__h3'>TRAUMATOLOGY</h3>
            <p className='box__parraph'>
              Traumatology is used to the study and treatment of traumatic
              injuries that affect the musculoskeletal system, which includes
              the bones, spinal dorsal, joints, ligaments, tendons and muscles,
              it also deals with injuries to the joints, which may include
              dislocations and ligament and cartilage injuries.
            </p>
          </motion.div>
          <motion.div className='item' variants={proceduresCardsAnimation}>
            <img className='box__icon' src={plastic} />
            <h3 className='box__h3'>PLASTIC SURGERY</h3>
            <p className='box__parraph'>
              Plastic Surgery is a medical specialty that, through various
              surgical techniques and also non-surgical procedures, corrects
              functional or anatomical alterations of the body, caused by
              defects -congenital or acquired- and by changes of age or physical
              texture. The foregoing, in order to improve or restore
              functionality and also personal appearance.
            </p>
          </motion.div>
          <motion.div className='item' variants={proceduresCardsAnimation}>
            <img className='box__icon' src={oto} />
            <h3 className='box__h3'>OTOLARYNGOLOGIST</h3>
            <p className='box__parraph'>
              Otorhinolaryngology is the medical specialty that is responsible
              for the prevention, diagnosis and treatment, both medical and
              surgical, of diseases that affect the upper respiratory tract
              (nasal cavities, mouth, pharynx, larynx), the ear and the proximal
              structures of the face and neck.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <section className='home__section3'>
        <motion.div
          className='home__section3__container'
          initial={{opacity: 0, y: -100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.3}}
          viewport={{once: true, amount: 0.9}}
        >
          <h2 className='section3__h2'>Why Come Abroad?</h2>
          <br />
          <p className='section3__p'>
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
            communications. Limited health insurance also plays an important
            role, as costs rise and coverage declines, medical tourism becomes
            an affordable alternative.
          </p>
        </motion.div>
        <hr className='section3__hr' />
        <img className='section3__img' src={bonus} />
      </section>
      <section className='home__section4' ref={ref}>
        <motion.img
          className='airplane'
          animate={{x: isInView ? 0 : -2000}}
          transition={{duration: 0.8, delay: 0.3}}
          viewport={{once: true}}
          src={airplane}
          alt='travel airplane'
        />
        <motion.div
          className='home__section4__container'
          variants={travelAnimations}
          initial='start'
          whileInView='end'
          viewport={{once: true, amount: 0.5}}
        >
          <motion.div
            className='home__section4__items'
            variants={travelAnimations}
          >
            <img className='home__section4__img' src={travel1} />
          </motion.div>
          <motion.div
            className='home__section4__items'
            variants={travelAnimations}
          >
            <div className='home__section4__text'>
              <p className='home__section4__p'>
                <b>
                  Travel to the most iconic places on Tj, SD, enjoy a
                  comfortable place and then come to us for help to you with
                  your health
                </b>
              </p>
            </div>
          </motion.div>
          <motion.div
            className='home__section4__items'
            variants={travelAnimations}
          >
            <img className='home__section4__img' src={travel2} />
          </motion.div>
        </motion.div>
      </section>
      <section className='home__section5'>
        <div
          className='section5__background'
          style={{
            background: `url(${hotel}) no-repeat center/var(--section4-background-size)`,
          }}
        >
          <motion.div
            className='section5__container'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.3, delay: 0.4}}
            viewport={{once: true, amount: 1}}
          >
            <h2 className='section5__h2'>How is traveling with us?</h2>
            <p className='section5__p'>
              The packages are completely personalized, regardless of whether
              you only want to temporarily lodging to solve your health, or if
              you decide to get a tour to any of our destinations.
              <br />
              You are free to choose if you want a &quot;doctor visit + travel
              package&quot;, just visit the doctor, or just travel, we take care
              of you from the moment you leave your city.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
