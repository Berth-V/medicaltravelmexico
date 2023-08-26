import './Bariatric.css';
import hans from '/dr hans.jpeg';
import sport from '/sport.jpg';
import spine from '/spine.jpg'
import spineicon from '/spine.png'
import {useRef} from 'react';
import {useInView} from 'framer-motion';
import {motion} from 'framer-motion';
import {GiSkeletalHand} from 'react-icons/gi';
import {GiKneeCap} from 'react-icons/gi';

function Bariatric() {
  const ref = useRef();
  const isInView = useInView(ref, {once:true, amount:0.4})
  //Framer Motion Variants//
  const secondCartAnimation={
    start:{opacity: 0,x:100},
    end:{
      opacity:1, x:0,
      transition:{staggerChildren:0.1}
    }
  }
  const xAxisNegative={
    start:{x:-1000},
    end:{x:0}
  }
  const xAxisPositive={
    start:{x:1000},
    end:{x:0}
  }

  return (
    <div className='bariatric'>
      <div className='bariatric__section1'>
        <motion.div className='doctor__card'
          variants={secondCartAnimation}
          initial='start'
          animate='end'
        >
          <motion.img className='doctor__img' src={hans}
            variants={secondCartAnimation}
          />
          <motion.h2 className='doctor__procedure'
            variants={secondCartAnimation}
          >
            Traumatology
          </motion.h2>
          <motion.h2 className='bariatric__name'
            variants={secondCartAnimation}
          >
            Dr. Hans Ruiz
          </motion.h2>
          <motion.p className='doctor__description'
            variants={secondCartAnimation}
          >
            Our surgerys changes lives.<br/>
            I specialize in all kinds of pain management to give 
            people a better quality of life and thus improve their days.<br/>
            From surgical procedures to relieve spinal pain to prosthetic 
            hip and knee replacement.<br/>
            I also perform non-surgical procedures for pain relief such as 
            the application of PRP, hyaluronic acid and radiofrequency pain 
            reduction to nerves.<br/>
            I have 9 years of experience in the field of orthopedics and have 
            performed thousands of surgeries with a very low percentage of 
            complications.<br/>
            "You can always get better, you just have to find the right doctor."
          </motion.p>
        </motion.div>
      </div>
      <div className='bariatric__section2'>
        <div className='first__branch'>
          <div className='branch__img__container'>
            <img className='branch__img' src={sport}/>
          </div>
          <div className='text__container'>
          <motion.h2 className='sport__tittle'
            variants={xAxisNegative}
            initial='start'
            animate='end'
          >
            Sport Medicine
          </motion.h2>
          <motion.p className='sport__description'
            variants={xAxisNegative}
            initial='start'
            animate='end'
          >
            Prevention and treatment of injuries derived from sports practice.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id cupiditate minus corrupti beatae nihil autem molestias odit quos voluptates.
          </motion.p>  
          </div>
        </div>
        <div className='spine__dorsal'>
          <div className='spine__text__container'>
            <h2 className='spine__tittle'>Spine Dorsal</h2>
            <p className='spine__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat quas laudantium reiciendis asperiores quaerat illo sint omnis vero magni vel veritatis fuga iure enim incidunt ipsa iste provident. Autem?
            </p>  
          </div>
          <div className='spine__img__container'>
            <img className='spine__img' src={spine}/>
          </div>
        </div>
      </div>
      <div className='bariatric__section3'>
        <h2 className='bariatric__h2'>Top Surgerys</h2>
        <div className='bariatric__icon__box'>
          <div className='bariatric__item'>
            <GiSkeletalHand className='bariatric__icon'/>
            <span className='bariatric__span'>Wrist Surgery</span>
            <p className='bariatric__icon__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo deleniti neque ipsum voluptate? Quaerat.
            </p>
          </div>
          <div className='bariatric__item'>
            <GiKneeCap className='bariatric__icon'/>
            <span className='bariatric__span'>Knee Surgery</span>
            <p className='bariatric__icon__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo deleniti neque ipsum voluptate? Quaerat.
            </p>
          </div>
          <div className='bariatric__item'>
            <img className='bariatric__icon--png' src={spineicon}/>
            <span className='bariatric__span'>Herniatic Disc</span>
            <p className='bariatric__icon__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo deleniti neque ipsum voluptate? Quaerat.
            </p>
          </div>
        </div>
      </div>
      <div className='form__container'>
        <h2 className='form__h2'>Contact Us</h2>
        <form className='form'>
          <input className='form__input'
            name='name'
            type='text'
            placeholder='Name'
            autoComplete='off'
            required=''
          />
          <input className='form__input'
            name='procedure'
            type='text'
            placeholder='Interested Procedure'
            required=''
            autoComplete='off'
          />
          <input className='form__input'
            name='email'
            type='email'
            placeholder='E-Mail'
            required=''
            autoComplete='off'
          />
          <input className='form__input'
            name='number'
            type='tel'
            placeholder='Phone Number (optional)'
            autoComplete='off'
          />
          <textarea className='form__input--message'
            name='message'
            placeholder='Message'
            required=''
          />
          <input className='form__submit'
            type='submit'
            value='Submit'
          />
          {/* Errors Text DIV */}
            <div className='result'
            >
            </div>
        </form>
      </div>
    </div>
  )
}

export default Bariatric;