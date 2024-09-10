import portada from '/portada.avif';
import {frontPageAnimations} from '../framerMotionVariants';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';
import {motion} from 'framer-motion';

function HomeSec1() {
  return (
    <section
      className='home__section1'
      style={{
        background: `url(${portada}) no-repeat var(--home--backfround-pos)/var(--home-frontpage-size) #FCFCFC`,
      }}
    >
      <motion.div
        className='home__textBox'
        // Framer Morion Attributtes //
        variants={frontPageAnimations}
        initial='start'
        whileInView='end'
        viewport={{once: true}}
      >
        <motion.h1
          className='home__h1'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          We are interested in your well-being
        </motion.h1>
        <motion.p
          className='home__p'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          -Save up to 70% in any process
        </motion.p>
        <motion.p
          className='home__p'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          -Certified Doctors
        </motion.p>
        <motion.p
          className='home__p'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          -Faster Response
        </motion.p>
        <motion.p
          className='home__p'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          -Completely personalized attention to each patient
        </motion.p>
        <motion.p
          className='home__p'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          -Optional Travel Packages for pre or post-op
        </motion.p>
        <motion.p
          className='home__p'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          US: +1 855 997 98 78
        </motion.p>
        <motion.p
          className='home__p'
          // Framer Morion Attributtes //
          variants={frontPageAnimations}
        >
          MX: +52 668 275 09 77
        </motion.p>
        <motion.div
          className='home__icon__box'
          // Framer Morion Attributtes //
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
  );
}

export default HomeSec1;
