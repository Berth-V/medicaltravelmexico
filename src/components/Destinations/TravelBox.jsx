import {useState} from 'react';
import {motion} from 'framer-motion';
import ensenada from '/ensenada.avif';
import rosarito from '/rosarito.avif';
import sanDiego from '/sandiego.avif';
import losAngeles from '/losangeles.avif';
import tijuana from '/tijuana.avif';
import beverly from '/beverly.avif';
import TravelInfo from './TravelInfo';

function TravelBox() {
  const [isEnsenada, setIsEnsenada] = useState(false);
  const [isRosarito, setIsRosarito] = useState(false);
  const [isSandiego, setIsSandiego] = useState(false);
  const [isTijuana, setIsTijuana] = useState(false);
  const [isLa, setIsLa] = useState(false);
  const citys = [
    {
      name: 'Ensenada',
      img: ensenada,
      btnText: 'Read More',
    },
    {
      name: 'Rosarito',
      img: rosarito,
      btnText: 'Read More',
    },
    {
      name: 'San Diego',
      img: sanDiego,
      btnText: 'Read More',
    },
    {
      name: 'Tijuana',
      img: tijuana,
      btnText: 'Read More',
    },
    {
      name: 'Los Angeles',
      img: losAngeles,
      btnText: 'Read More',
    },
    {
      name: 'Beverly Hills & Rodeo Drive',
      img: beverly,
      btnText: 'L.A Include',
    },
  ];
  // Framer Motion Variants //
  const itemsAnimation = {
    start: {opacity: 0, y: -50},
    end: {
      opacity: 1,
      y: 0,
      delay: 0.5,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };
  return (
    <>
      {/* Destinations Section 2 */}
      <motion.div
        className='destinations__section2'
        variants={itemsAnimation}
        initial='start'
        whileInView='end'
        viewport={{amount: 0.5, once: true}}
      >
        {citys.map((cityName, index) => (
          <motion.div
            className='destinations__section2__item'
            style={{
              background: `url(${cityName.img})  no-repeat right/var(--travel-box-size1)`,
            }}
            key={index}
            variants={itemsAnimation}
          >
            <h3 className='destinations__section2__h3'>{cityName.name}</h3>
            <span className='know__btn' onClick={() => cityName.setState(true)}>
              {cityName.btnText}
            </span>
          </motion.div>
        ))}
        <TravelInfo
          isEnsenada={isEnsenada}
          setIsEnsenada={setIsEnsenada}
          isRosarito={isRosarito}
          setIsRosarito={setIsRosarito}
          isSandiego={isSandiego}
          setIsSandiego={setIsSandiego}
          isTijuana={isTijuana}
          setIsTijuana={setIsTijuana}
          isLa={isLa}
          setIsLa={setIsLa}
        />
      </motion.div>
    </>
  );
}

export default TravelBox;
