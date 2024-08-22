import {useState} from 'react';
import {motion} from 'framer-motion';
import {citys} from './destinationsData';
import TravelInfo from './TravelInfo';

function TravelBox() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [destName, setDestName] = useState();
  const [destTittle, setDestTittle] = useState();
  const [destText, setDestText] = useState();

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
        {citys.map((city, index) => (
          <motion.div
            key={index}
            className='destinations__section2__item'
            style={{
              background: `url(${city.img})  no-repeat right/var(--travel-box-size1)`,
            }}
            variants={itemsAnimation}
          >
            <h3 className='destinations__section2__h3'>{city.name}</h3>
            <span
              className='know__btn'
              onClick={() => {
                setInfoOpen(true);
                setDestTittle(city.name);
                setDestName(city.classname);
                setDestText(city.destInfo);
              }}
            >
              {city.btnText}
            </span>
          </motion.div>
        ))}
        <TravelInfo
          destTittle={destTittle}
          destName={destName}
          destText={destText}
          infoOpen={infoOpen}
          setInfoOpen={setInfoOpen}
        />
      </motion.div>
    </>
  );
}

export default TravelBox;