import './Destinations.css';
import travel1 from '/travel1.jpg';
import travel2 from '/travel2.jpg';
import travel3 from '/travel3.jpg';
import travel4 from '/travel4.jpg';
import travel5 from '/travel5.jpg';
import travel6 from '/travel6.jpg';
import travel7 from '/travel7.jpg';
import travel8 from '/travel8.jpg';

function Destinations() {
  return (
    <div className='destinations'>
      <div className='travel__box'>
        <div className='box__item'>
          <img className='box__img'
            src={travel1}
          />
        </div>
        <div className='box__item'>
          <img className='box__img'
            src={travel7}
          />
        </div>
        <div className='box__item'>
          <img className='box__img'
            src={travel3}
          />
        </div>
        <div className='box__item'>
          <img className='box__img'
            src={travel4}
          />
        </div>
        <div className='box__item--span'>
         <span className='box__item--text'>
           Travel to most touristic city's and beaches, enjoy a comfort place</span>
        </div>
        <div className='box__item'>
          <img className='box__img'
            src={travel5}
          />
        </div>
        <div className='box__item'>
          <img className='box__img'
            src={travel6}
          />
        </div>
        <div className='box__item'>
          <img className='box__img'
            src={travel2}
          />
        </div>
        <div className='box__item'>
          <img className='box__img'
            src={travel8}
          />
        </div>
      </div>
    </div>
  )   
}

export default Destinations;