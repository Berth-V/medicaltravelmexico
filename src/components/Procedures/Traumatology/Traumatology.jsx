import './Traumatology.css';
import hans from '/hans.avif';
import shoulder1 from '/shoulder1.avif';
import shoulder2 from '/shoulder2.avif';
import arm1 from '/arm1.avif';
import arm2 from '/arm2.avif';
import knee1 from '/knee1.avif';
import knee2 from '/knee2.avif';
import spine from '/spine.png';
import hip from '/hip.png';
import fracture from '/fracture.png';
import regMedicine from '/regmedicine.avif';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';
import {motion} from 'framer-motion';

function Traumatology() {
  //Framer Motion//
  const introductionAnimation = {
    start: {opacity: 0, x: 100},
    end: {
      opacity: 1,
      x: 0,
      transition: {staggerChildren: 0.2},
    },
  };
  return (
    <div className='trauma'>
      <motion.div
        className='trauma__section1'
        variants={introductionAnimation}
        initial='start'
        animate='end'
      >
        <motion.div className='trauma__card' variants={introductionAnimation}>
          <motion.img
            className='trauma__img'
            src={hans}
            variants={introductionAnimation}
          />
          <div className='trauma__text'>
            <motion.h2
              className='trauma__procedure'
              variants={introductionAnimation}
            >
              Traumatology
            </motion.h2>
            <motion.h2
              className='trauma__doctor__name'
              variants={introductionAnimation}
            >
              Dr. Hans Ruiz
            </motion.h2>
            <motion.p
              className='trauma__description'
              variants={introductionAnimation}
            >
              Our surgerys changes lives.
              <br />
              I specialize in pain management of all kinds to give people a
              better quality of life and thus improve their days.
              <br />
              From surgical procedures to relieve spinal pain to prosthetic hip
              and knee replacement.
              <br />
              I also perform non-surgical procedures for pain relief such as the
              application of PRP, hyaluronic acid and radiofrequency pain
              reduction to nerves.
              <br />
              I have 9 years of experience in the field of orthopedics and have
              performed thousands of surgeries with a very low percentage of
              complications.
              <br />
              &quot;You can always get better, you just have to find the right
              doctor.&quot;
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <div className='trauma__section2'>
        <motion.div
          className='trauma__icon__box'
          initial={{opacity: 0, y: -50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay: 0.5, duration: 0.5}}
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
                Hip and knee prostheses, all our prostheses are of a high
                quality, using the same brand used by doctors in the United
                States and Canada, all for a lower price.
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
      <div className='trauma__section3'>
        <div className='trauma__approaches'>
          <div className='trauma__approaches__item'>
            <img className='trauma__approaches__img' src={shoulder1} />
          </div>
          <div className='trauma__approaches__item'>
            <h2 className='trauma__approaches__tittle'>SHOULDER</h2>
            <p className='trauma__approaches__p'>
              Rotator Cuff Disease, Shoulder Impingement,
            </p>
          </div>
          <div className='trauma__approaches__item'>
            <img className='trauma__approaches__img' src={shoulder2} />
          </div>
          <div className='trauma__approaches__item'>
            <img className='trauma__approaches__img' src={arm1} />
          </div>
          <div className='trauma__approaches__item'>
            <h2 className='trauma__approaches__tittle'>ARM</h2>
            <p className='trauma__approaches__p'>
              Cartilage Repair, Meniscus Repair, Radius and Ulna surgery, Tendon
              Management, Carpal Tunnel, etc.
            </p>
          </div>
          <div className='trauma__approaches__item'>
            <img className='trauma__approaches__img' src={arm2} />
          </div>
          <div className='trauma__approaches__item'>
            <img className='trauma__approaches__img' src={knee1} />
          </div>
          <div className='trauma__approaches__item'>
            <h2 className='trauma__approaches__tittle'>LEGS & FOOT</h2>
            <p className='trauma__approaches__p'>
              Flatfoot, Bunion, Femur Fracture, Metatarsal Base Fracture
            </p>
          </div>
          <div className='trauma__approaches__item'>
            <img className='trauma__approaches__img' src={knee2} />
          </div>
        </div>
      </div>
      <div
        className='trauma__section4'
        style={{
          background: `url(${regMedicine}) no-repeat bottom/var(--trauma4--backgronund-size) `,
        }}
      >
        <motion.h2
          className='trauma__other__h2'
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{delay: 0.5}}
          viewport={{once: true}}
        >
          Regenerative Medicine
        </motion.h2>
        <motion.p
          className='trauma__other__p'
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{delay: 0.7}}
          viewport={{once: true}}
        >
          Regenerative medicine is a broad field that includes tissue
          engineering, but also incorporates research into self-healing where
          the body uses its own systems, sometimes with the help of foreign
          biological material, to recreate cells and rebuild tissues and organs.
        </motion.p>
      </div>
      <div className='trauma__contact'>
        <h2 className='trauma__contact__h2'>Contact Us</h2>
        <div className='trauma__contact__container'>
          <a
            className='trauma__contact__item'
            href='mailto:travelmedicalmx@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <IoIosMail className='trauma__contact__icon' />
            <span className='trauma__contact__span'>E-Mail</span>
          </a>
          <a
            className='trauma__contact__item'
            href='https://wa.me/526981032939'
            target='_blank'
            rel='noreferrer'
          >
            <IoLogoWhatsapp className='trauma__contact__icon' />
            <span className='trauma__contact__span'>WhatsApp</span>
          </a>
          <a
            className='trauma__contact__item'
            href='https://www.instagram.com/medical.travel.mx/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram className='trauma__contact__icon' />
            <span className='trauma__contact__span'>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Traumatology;
