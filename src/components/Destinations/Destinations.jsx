import './Destinations.css';
import TravelBox from './TravelBox';
import frontpage from '/frontpage.avif';
import bonus2 from '/bonus2.avif';
import {motion} from 'framer-motion';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';

function Destinations() {
  return (
    <div className='destinations'>
      <div
        className='destinations__section1'
        style={{
          background: `url(${frontpage}) no-repeat var(--frontpage-pos)/var(--frontpage-size) `,
        }}
      >
        <motion.div
          className='destinations__section1__description'
          /* Framer Motion  Attributtes */
          initial={{opacity: 0, x: 300}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.5}}
          viewport={{once: true}}
        >
          <h3 className='destinations__section1__h3'>
            Come to visit our mexico most touristic places
          </h3>
          <p className='destinations__section1__text'>
            Medical Travel Mexico is an organization that facilitates the
            planning of medical tourism trips to Tijuana, Baja California. It
            offers support in finding medical specialists and provides essential
            information for medical procedures. In addition, it provides
            assistance in booking flights, accommodation and tourist activities,
            making the travel experience more comfortable and enjoyable.
          </p>
        </motion.div>
      </div>
      {/* Destinations Section2 Component */}
      <TravelBox />
      <div className='destinations__section3'>
        <div className='destinations__section3__container'>
          <h2 className='destinations__section3__h2'>
            Benefits of Medical Tourism
            <br />
          </h2>
          <p className='destinations__section3__p'>
            -Affordability and Cost-Effectiveness
            <br />
            -Immediate Service
            <br />
            -Ease of Programming
            <br />
            -Opportunity to Travel
            <br />
            <br />
            Medical tourism is an attractive option for those seeking quality
            medical care at lower prices. It offers significant savings, often
            between 30% and 80%, compared to costs in developed countries.
            Additionally, it provides immediate access to medical services, the
            convenience of scheduling appointments online, and the opportunity
            to combine healthcare with travel. Procedures are performed by
            highly trained professionals, and lower administration and insurance
            costs contribute to lower prices in medical tourism destinations.
            <br />
          </p>
        </div>
        <div className='deestinations__section3__img__container'>
          <motion.img
            className='deestinations__section3__img'
            src={bonus2}
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 1}}
            transition={{duration: 0.5}}
          />
        </div>
      </div>
      <div className='destinations__contact'>
        <h2 className='destinations__contact__h2'>Contact Us</h2>
        <div className='destinations__contact__container'>
          <a
            className='destinations__contact__item'
            href='mailto:travelmedicalmx@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <IoIosMail className='destinations__contact__icon' />
            <span className='destinations__contact__span'>E-Mail</span>
          </a>
          <a
            className='destinations__contact__item'
            href='https://wa.me/526981032939'
            target='_blank'
            rel='noreferrer'
          >
            <IoLogoWhatsapp className='destinations__contact__icon' />
            <span className='destinations__contact__span'>WhatsApp</span>
          </a>
          <a
            className='destinations__contact__item'
            href='https://www.instagram.com/medical.travel.mx/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram className='destinations__contact__icon' />
            <span className='destinations__contact__span'>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
