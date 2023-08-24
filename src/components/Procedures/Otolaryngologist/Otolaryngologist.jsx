import './Otolaryngologist.css';
import hans from '/dr hans.jpeg';
import sport from '/sport.jpg';
import spine from '/spine.jpg'
import spineicon from '/spine.png'
import {GiSkeletalHand} from 'react-icons/gi';
import {GiKneeCap} from 'react-icons/gi';

function Otolaryngologist() {
  return (
    <div className='oto'>
      <div className='oto__section1'>
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
      <div className='oto__section2'>
        <div className='sport__medicine'>
          <div className='sport__img__container'>
            <img className='sport__img' src={sport}/>
          </div>
          <div className='text__container'>
          <h2 className='sport__tittle'>Sport Medicine</h2>
          <p className='sport__description'>
            Prevention and treatment of injuries derived from sports practice.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id cupiditate minus corrupti beatae nihil autem molestias odit quos voluptates.
          </p>  
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
      <div className='oto__section3'>
        <div className='icon__box'>
          <div className='trauma__item'>
            <GiSkeletalHand className='trauma__icon'/>
            <span className='trauma__span'>Wrist Surgery</span>
            <p className='icon__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo deleniti neque ipsum voluptate? Quaerat.
            </p>
          </div>
          <div className='trauma__item'>
            <GiKneeCap className='trauma__icon'/>
            <span className='trauma__span'>Knee Surgery</span>
            <p className='icon__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo deleniti neque ipsum voluptate? Quaerat.
            </p>
          </div>
          <div className='trauma__item'>
            <img className='trauma__icon--png' src={spineicon}/>
            <span className='trauma__span'>Herniatic Disc</span>
            <p className='icon__p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo deleniti neque ipsum voluptate? Quaerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Otolaryngologist
