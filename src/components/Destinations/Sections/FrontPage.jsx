import frontpageImg from '/frontpage.avif';
import {motion} from 'framer-motion';

function FrontPage() {
    return(
    <div
    className='destinations__section1'
    style={{
      background: `url(${frontpageImg}) no-repeat var(--frontpage-pos)/var(--frontpage-size) `,
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
  );
}

export default FrontPage;