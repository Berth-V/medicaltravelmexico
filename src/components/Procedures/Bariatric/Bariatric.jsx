import './Bariatric.css';
import narda from '/narda.avif';
import intestine1 from '/intestine1.avif';
import intestine2 from '/intestine2.avif';
import estomach1 from '/stomach1.avif';
import estomach2 from '/stomach2.avif';
import hernia1 from '/hernia1.avif';
import hernia2 from '/hernia2.avif';
import gastricSleeve from '/gastric sleeve.png';
import baipas from '/baipas.png';
import biliopancreatic from '/biliopancreatic.png';
import other from '/other.avif';
import {motion} from 'framer-motion';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';

function Bariatric() {
  const introductionAnimation = {
    start: {opacity: 0, x: 100},
    end: {
      opacity: 1,
      x: 0,
      transition: {staggerChildren: 0.2},
    },
  };

  return (
    <div className='bariatric'>
      <motion.div
        className='bariatric__section1'
        variants={introductionAnimation}
        initial='start'
        animate='end'
      >
        <motion.div
          className='bariatric__card'
          variants={introductionAnimation}
        >
          <motion.img
            className='bariatric__img'
            src={narda}
            variants={introductionAnimation}
          />
          <div className='bariatric__text'>
            <motion.h2
              className='bariatric__procedure'
              variants={introductionAnimation}
            >
              Bariatric
            </motion.h2>
            <motion.h2
              className='bariatric__doctor__name'
              variants={introductionAnimation}
            >
              Dr. Narda Carrera
            </motion.h2>
            <motion.p
              className='bariatric__description'
              variants={introductionAnimation}
            >
              In the field of Bariatrics, we are dedicated to transforming lives
              and improving health. As a specialist, my primary focus is helping
              people achieve healthy and sustainable weight loss, which in turn
              significantly improves their quality of life.
              <br />
              Weight loss is a personal journey, and we are here to provide the
              support you need every step of the way. Our highly skilled and
              committed team works closely with patients to ensure successful,
              long-lasting results.
              <br />
              At our clinic, you will find a welcoming environment and a
              dedicated team who care deeply about your well-being.
              <br />
              Together, we can achieve a healthier future.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <div className='bariatric__section2'>
        <div className='bariatric__icon__box'>
          <motion.div
            className='bariatric__item'
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.5, duration: 0.5}}
            viewport={{once: true}}
          >
            <img className='bariatric__icon' src={gastricSleeve} />
            <span className='bariatric__span'>Gastric Sleeve</span>
            <div className='bariatric__item__text'>
              <p className='bariatric__icon__p'>
                In this operation, a surgeon removes part of the stomach and
                makes a narrow tube or &quot;sleeve&quot; out of the rest.
              </p>
            </div>
          </motion.div>
          <motion.div
            className='bariatric__item'
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.5, duration: 0.5}}
            viewport={{once: true}}
          >
            <img className='bariatric__icon' src={baipas} />
            <span className='bariatric__span'>Gastric and Roux Baipas</span>
            <div className='bariatric__item__text'>
              <p className='bariatric__icon__p'>
                Most commonly performed weight loss procedure in the United
                States. It has been practiced for over 30 years and provides an
                excellent balance between weight loss and manageable side
                effects.
              </p>
            </div>
          </motion.div>
          <motion.div
            className='bariatric__item'
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.5, duration: 0.5}}
            viewport={{once: true}}
          >
            <img className='bariatric__icon' src={biliopancreatic} />
            <span className='bariatric__span'>
              Biliopancreatic Diversion with Duodenal Switch
            </span>
            <div className='bariatric__item__text'>
              <p className='bariatric__icon__p'>
                It is usually performed in a single procedure; however, in
                certain circumstances, it can be performed in two separate
                operations: first, a sleeve gastrectomy, and then a bowel
                bypass, once weight loss has begun.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='bariatric__section3'>
        <div className='bariatric__approaches'>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img' src={intestine1} />
          </div>
          <div className='bariatric__approaches__item'>
            <h2 className='bariatric__approaches__tittle'>
              SMALL AND LARGE INTESTINE
            </h2>
            <p className='bariatric__approaches__p'>
              Acute Abdomen, Intestinal Obstruction, irritable Bowel Syndrome
            </p>
          </div>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img' src={intestine2} />
          </div>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img' src={estomach1} />
          </div>
          <div className='bariatric__approaches__item'>
            <h2 className='bariatric__approaches__tittle'>STOMACH</h2>
            <p className='bariatric__approaches__p'>Reflux Esophagitis</p>
          </div>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img' src={estomach2} />
          </div>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img' src={hernia1} />
          </div>
          <div className='bariatric__approaches__item'>
            <h2 className='bariatric__approaches__tittle'>HERNIAS</h2>
            <p className='bariatric__approaches__p'>Inguinal, Umbilical</p>
          </div>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img' src={hernia2} />
          </div>
        </div>
      </div>
      <div className='bariatric__section4'>
        <img className='bariatric__other__img' src={other} />
        <div className='bariatric__other'>
          <motion.h2
            className='bariatric__other__h2'
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: 0.3}}
            viewport={{once: true}}
          >
            Other Treatments
          </motion.h2>
          <motion.p
            className='bariatric__other__p'
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: 0.5}}
            viewport={{once: true}}
          >
            -Goiter
            <br />
            -Morbid Obesity
            <br />
            -Acute Pancreatitis
            <br />
            -Chronic Cholecystitis
          </motion.p>
        </div>
      </div>
      <div className='bariatric__contact'>
        <h2 className='bariatric__contact__h2'>Contact Us</h2>
        <div className='bariatric__contact__container'>
          <a
            className='bariatric__contact__item'
            href='mailto:travelmedicalmx@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <IoIosMail className='bariatric__contact__icon' />
            <span className='bariatric__contact__span'>E-Mail</span>
          </a>
          <a
            className='bariatric__contact__item'
            href='https://wa.me/526981032939'
            target='_blank'
            rel='noreferrer'
          >
            <IoLogoWhatsapp className='bariatric__contact__icon' />
            <span className='bariatric__contact__span'>WhatsApp</span>
          </a>
          <a
            className='bariatric__contact__item'
            href='https://www.instagram.com/medical.travel.mx/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram className='bariatric__contact__icon' />
            <span className='bariatric__contact__span'>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bariatric;
