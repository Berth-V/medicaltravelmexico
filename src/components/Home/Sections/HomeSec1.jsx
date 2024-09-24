import homeFrontPage from '/homefrontpage.avif';
import {frontPageAnimations} from '../framerMotionVariants';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';
import {motion} from 'framer-motion';

function HomeSec1() {
  return (
    <section
      className='home__section1'
      style={{
        background: `url(${homeFrontPage}) no-repeat var(--home--backfround-pos)/var(--home-frontpage-size) #FCFCFC`,
      }}
    >
      <motion.div
        className='section1__textBox'
        // Framer Motion Attributes //
        variants={frontPageAnimations}
        initial='start'
        whileInView='end'
        viewport={{once: true}}
      >
        <motion.h1
          className='section1__h1'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          We are interested in your well-being
        </motion.h1>
        <motion.p
          className='section1__p'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          -Save up to 70% in any process
        </motion.p>
        <motion.p
          className='section1__p'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          -Certified Doctors
        </motion.p>
        <motion.p
          className='section1__p'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          -Faster Response
        </motion.p>
        <motion.p
          className='section1__p'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          -Completely personalized attention to each patient
        </motion.p>
        <motion.p
          className='section1__p'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          -Optional Travel Packages for pre or post-op
        </motion.p>
        <motion.p
          className='section1__p'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          US: +1 855 997 98 78
        </motion.p>
        <motion.p
          className='section1__p'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          MX: +52 668 275 09 77
        </motion.p>
        <motion.div
          className='section1__icon_container'
          // Framer Motion Attributes //
          variants={frontPageAnimations}
        >
          <a
            className='section1__link'
            href='mailto:travelmedicalmx@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <IoIosMail className='section1__icon' />
            <span className='section1__icon__span'>E-Mail</span>
          </a>
          <a
            className='section1__link'
            href='https://wa.me/526981032939'
            target='_blank'
            rel='noreferrer'
          >
            <IoLogoWhatsapp className='section1__icon' />
            <span className='section1__icon__span'>Whatsapp</span>
          </a>
          <a
            className='section1__link'
            href='https://www.instagram.com/medical.travel.mx/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram className='section1__icon' />
            <span className='section1__icon__span'>Instagram</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeSec1;
