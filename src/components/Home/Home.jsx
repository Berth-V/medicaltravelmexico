import './Home.css';
import portada from '/portada.jpg';
import bariatric from '/bariatric icon.png';
import oto from '/oto icon.png';
import plastic from '/plastic icon.png';
import trauma from '/trauma icon.png';
import airplane from '/airplane.png';
import travel7 from '/travel7.jpg';
import travel8 from '/travel8.jpg';
import {motion} from 'framer-motion';

function Home() {

  const frontPageAnimations={
    start: {y:-100,opacity:0},
    end: {y:0,opacity:1,
      transition:{
        staggerChildren:0.3,
        duration:0.6
      }
    }
  }

  const proceduresCardsAnimation={
    start: {y:-100,opacity:0},
    end: {y:0, opacity:1, rotateY: [0, 360, 0]
    }
  }

  return (
      <div className="home">
        <section className='home__section1'
          style={{background:`url(${portada}) no-repeat left/90% #FCFCFC`}}
        >
          <motion.div className='home__textBox'
            variants={frontPageAnimations}
            initial='start'
            whileInView='end'
          >
            <motion.h1 className='home__h1'
              variants={frontPageAnimations}
            >
              Lorem ipsum dolor sit amet consectetur.
            </motion.h1>
            <motion.p className='home__p'
              variants={frontPageAnimations}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Atque doloribus quam consequatur beatae voluptas id voluptatibus 
              ratione magni culpa omnis, deleniti recusandae ut ullam, maiores 
              laboriosam assumenda, velit facilis dignissimos.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </motion.p>
          </motion.div>
        </section>
        <section  className='home__section2'>
          <motion.div className='box'>
            <motion.div className='item'
              variants={proceduresCardsAnimation}
              initial='start'
              whileInView='end'
              viewport={{amount:1,once:true}}
              transition={{duration:0.5,delay:0}}
            >
              <img className='box__icon'
                src={bariatric}
              />
              <h3>BARIATRIC</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </motion.div>
            <motion.div className='item'
              variants={proceduresCardsAnimation}
              initial='start'
              whileInView='end'
              viewport={{amount:1,once:true}}
              transition={{duration:0.5,delay:0.2}}
            >
              <img className='box__icon' 
                src={trauma}
              />
              <h3>TRAUMATOLOGY</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </motion.div>
            <motion.div className='item'
              variants={proceduresCardsAnimation}
              initial='start'
              whileInView='end'
              viewport={{amount:1,once:true}}
              transition={{duration:0.5,delay:0.4}}
            >
              <img className='box__icon' 
                src={plastic}
              />
              <h3>PLASTIC SURGERY</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </motion.div>
            <motion.div className='item'
              variants={proceduresCardsAnimation}
              initial='start'
              whileInView='end'
              viewport={{amount:1,once:true}}
              transition={{duration:0.5,delay:0.6}}
            >
              <img className='box__icon' 
                src={oto}
              />
              <h3>OTOLARYNGOLOGIST</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </motion.div>
          </motion.div>
        </section>
        <section  className='home__section3'>
          <motion.img className='airplane'
            initial={{x:-1700}}
            whileInView={{x:0}}
            transition={{duration:1,delay:0.5}}
            viewport={{once:true}}
            src={airplane}
            alt='travel airplane'
          />
          <div className='banner'>
            <img className='travelimg1'
              src={travel7} 
              alt=""    
            />
            <p className='travel__p'>
              <b>Travel to the most iconic places on Tj, SD, enjoy a comfortable place
              and then come to us for help to you with your health  </b>
              
            </p>
            <img className='travelimg2'
              src={travel8} 
              alt="" 
            />
          </div>
        </section>
      </div>
  )
}

export default Home;