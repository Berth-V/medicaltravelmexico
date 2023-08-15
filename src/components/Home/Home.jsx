import './Home.css';
import portada from '/portada.jpg';
import bariatric from '/bariatric icon.png';
import oto from '/oto icon.png';
import plastic from '/plastic icon.png';
import trauma from '/trauma icon.png';
import airplane from '/airplane.png';
import travel4 from '/travel4.jpg';
import travel3 from '/travel3.jpg';
import {motion} from 'framer-motion';

function Home() {
  return (
      <div className="home">
        <section className='home__section1'
          style={{background:`url(${portada}) no-repeat center/105%`}}
        >
          <motion.div className='home__textBox'>
            <motion.h1 className='home__h1'>
              Lorem ipsum dolor sit amet consectetur.
            </motion.h1>
            <motion.p className='home__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Atque doloribus quam consequatur beatae voluptas id voluptatibus 
              ratione magni culpa omnis, deleniti recusandae ut ullam, maiores 
              laboriosam assumenda, velit facilis dignissimos.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </motion.p>
          </motion.div>
        </section>
        <section  className='home__section2'>
          <div className='box'>
            <div className='item'>
              <img className='box__icon'
                src={bariatric}
              />
              <h3>BARIATRIC</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </div>
            <div className='item'>
              <img className='box__icon' 
                src={trauma}
              />
              <h3>TRAUMATOLOGY</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </div>
            <div className='item'>
              <img className='box__icon' 
                src={plastic}
              />
              <h3>PLASTIC SURGERY</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </div>
            <div className='item'>
              <img className='box__icon' 
                src={oto}
              />
              <h3>OTOLARYNGOLOGIST</h3>
              <p className='box__parraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Doloremque ipsam aspernatur veritatis modi commodi, quia 
              facere temporibus voluptatem dolorum maxime? Et enim harum 
              nihil saepe rem esse hic. Architecto, laborum.</p>
            </div>
          </div>
        </section>
        <section  className='home__section3'>
          <img className='airplane'
            src={airplane}
            alt='travel airplane'
          />
          <div className='banner'>
            <img className='travelimg1'
              src={travel3} 
              alt=""    
            />
            <p className='travel__p'>
              <b>Travel to the most iconic places on Tj, SD, enjoy a comfortable place
              and then come to us for help to you with your health  </b>
              
            </p>
            <img className='travelimg2'
              src={travel4} 
              alt="" 
            />
          </div>
        </section>
      </div>
  )
}

export default Home;