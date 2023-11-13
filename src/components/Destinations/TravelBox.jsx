import {useContext} from 'react';
import {Context} from '../Context/Context';
import {motion} from 'framer-motion';
import ensenada from '/ensenada.avif';
import rosarito from '/rosarito.avif';
import sanDiego from '/sandiego.avif';
import losAngeles from '/losangeles.avif';
import tijuana from '/tijuana.avif';
import beverly from '/beverly.avif';
import TravelInfo from './TravelInfo';

function TravelBox() {
  const {
    isEnsenada,
    setIsEnsenada,
    isRosarito,
    setIsRosarito,
    isSandiego,
    setIsSandiego,
    isTijuana,
    setIsTijuana,
    isLa,
    setIsLa,
  } = useContext(Context);
  const citys = [
    {
      name: 'Ensenada',
      img: ensenada,
      setState: setIsEnsenada,
      getState: isEnsenada,
      btnText: 'Read More',
    },
    {
      name: 'Rosarito',
      img: rosarito,
      setState: setIsRosarito,
      getState: isRosarito,
      btnText: 'Read More',
    },
    {
      name: 'San Diego',
      img: sanDiego,
      setState: setIsSandiego,
      getState: isSandiego,
      btnText: 'Read More',
    },
    {
      name: 'Tijuana',
      img: tijuana,
      setState: setIsTijuana,
      getState: isTijuana,
      btnText: 'Read More',
    },
    {
      name: 'Los Angeles',
      img: losAngeles,
      setState: setIsLa,
      getState: isLa,
      btnText: 'Read More',
    },
    {
      name: 'Beverly Hills & Rodeo Drive',
      img: beverly,
      setState: 'none',
      getState: 'none',
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
            <span
              className='know__btn'
              onClick={() => cityName.setState(!cityName.getState)}
            >
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
        {/*<motion.div
          className="destinations__section2__item"
          variants={itemsAnimation}
          style={{
            background: `url(${ensenada})  no-repeat right/var(--travel-box-size1)`,
          }}
        >
          <h3 className="destinations__section2__h3">Ensenada</h3>
          <span
            className="know__btn"
            onClick={() => setIsEnsenada(!isEnsenada)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div
          className="destinations__section2__item"
          variants={itemsAnimation}
          style={{
            background: `url(${rosarito})  no-repeat bottom/var(--travel-box-size1)`,
          }}
        >
          <h3 className="destinations__section2__h3">Rosarito</h3>
          <span
            className="know__btn"
            onClick={() => setIsRosarito(!isRosarito)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div
          className="destinations__section2__item"
          variants={itemsAnimation}
          style={{
            background: `url(${sanDiego})  no-repeat right/var(--travel-box-size2)`,
          }}
        >
          <h3 className="destinations__section2__h3">San Diego</h3>
          <span
            className="know__btn"
            onClick={() => setIsSandiego(!isSandiego)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div
          className="destinations__section2__item"
          variants={itemsAnimation}
          style={{
            background: `url(${tijuana})  no-repeat center/var(--travel-box-size1)`,
          }}
        >
          <h3 className="destinations__section2__h3">Tijuana</h3>
          <span className="know__btn" onClick={() => setIsTijuana(!isTijuana)}>
            Read More
          </span>
        </motion.div>
        <motion.div
          className="destinations__section2__item"
          variants={itemsAnimation}
          style={{
            background: `url(${losAngeles})  no-repeat center/var(--travel-box-size1)`,
          }}
        >
          <h3 className="destinations__section2__h3">Los Angeles</h3>
          <span className="know__btn" onClick={() => setIsLa(!isLa)}>
            Read More
          </span>
        </motion.div>
        <motion.div
          className="destinations__section2__item"
          variants={itemsAnimation}
          style={{
            background: `url(${beverly}) no-repeat center/var(--travel-box-size1)`,
          }}
        >
          <h3 className="destinations__section2__h3">Beverly Hills & Rodeo Drive</h3>
          <span className="know__btn">L.A Include</span>
        </motion.div>*/}
      </motion.div>
    </>
  );
}

export default TravelBox;
