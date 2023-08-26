import './Bariatric.css';
import hans from '/dr hans.jpeg';
import sport from '/sport3.jpg';
import sport2 from '/sport2.jpg';
import spine from '/spine.jpg'
import spine2 from '/spine2.jpg'
import spineicon from '/spine.png'
import {GiSkeletalHand} from 'react-icons/gi';
import {GiKneeCap} from 'react-icons/gi';

function Bariatric() {
  return (
    <div className='bariatric'>
      <div className='bariatric__section1'>
        <div className='doctor__card'>
          <img className='doctor__img' src={hans}/>
          <h2 className='doctor__procedure'>Traumatology</h2>
          <h2 className='doctor'>Dr. Hans Ruiz</h2>
          <p className='doctor__description'>
            Our surgerys changes lives.<br/>
            I specialize in pain management of all kinds to give 
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
          </p>
        </div>
      </div>
      <div className='bariatric__section2'>
        <div className='bariatric__approaches'>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img' src={sport}/>
          </div>
          <div className='bariatric__approaches__item'>
            <h2 className='bariatric__approaches__tittle'>Sport Medicine</h2>
            <p className='bariatric__approaches__p'>
              Prevention and treatment of injuries derived from sports practice.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id cupiditate minus corrupti beatae nihil autem molestias odit quos voluptates.
            </p>  
          </div>
          <div className='bariatric__approaches__item'>
            <img className='bariatric__approaches__img'
              src={sport2}
            />
          </div>
          <div className='bariatric__approaches__item'
            style={{background:`url(${spine})  no-repeat center/100%`}}
          >
          </div>
          <div className='bariatric__approaches__item'>
            <h2 className='bariatric__approaches__tittle'>Spine Dorsal</h2>
            <p className='bariatric__approaches__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat quas laudantium reiciendis asperiores quaerat illo sint omnis vero magni vel veritatis fuga iure enim incidunt ipsa iste provident. Autem?
            </p>  
          </div>
          <div className='bariatric__approaches__item'
            style={{background:`url(${spine2})  no-repeat bottom/100%`}}
          >
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