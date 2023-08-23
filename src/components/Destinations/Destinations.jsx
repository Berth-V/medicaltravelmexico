import './Destinations.css';
import frontpage from '/frontpage.jpg';
import travel1 from '/travel1.jpg';
import travel2 from '/travel2.jpg';
import travel3 from '/travel3.jpg';
import travel4 from '/travel4.jpg';
import travel5 from '/travel5.jpg';
import travel6 from '/travel6.jpg';
import travelInfo from '/travelinfo.jpg';
import {NavLink} from 'react-router-dom';

function Destinations() {
  return (
    <div className='destinations'>
      <div className='destination__section1'>
        <img className='front__page' src={frontpage}/>
        <div className='destination__description'>
          <h3 className='destination__h3'>
            Come to visit our mexico most touristic places
          </h3>
          <p className='destination__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Modi porro dolorum hic quam minima laudantium 
            est saepe quia cupiditate nulla? Iste voluptas 
            deserunt ipsam blanditiis, explicabo necessitatibus 
            id aut possimus!
          </p>
        </div>
      </div>
      <div className='travel__box'>
        <div className='box__item'
          style={{background:`url(${travel1})  no-repeat left/250%`}}
        >
          <hr className='hr'/>
          <h3 className='item__h3'>Cenote</h3>
          <p className='item__p'>Lorem ipsum dolor cras</p>
        </div>
        <div className='box__item'
          style={{background:`url(${travel2})  no-repeat center/250%`}}
        >
          <hr className='hr'/>
          <h3 className='item__h3'>Rosarito Beach</h3>
          <p className='item__p'>Lorem ipsum dolor cras</p>
        </div>
        <div className='box__item'
          style={{background:`url(${travel3})  no-repeat right/250%`}}
        >
          <hr className='hr'/>
          <h3 className='item__h3'>Marbella Premium Hotel</h3>
          <p className='item__p'>Lorem ipsum dolor cras</p>
        </div>
        <div className='box__item'
          style={{background:`url(${travel4})  no-repeat center/150%`}}
        >
          <hr className='hr'/>
          <h3 className='item__h3'>Magic Towns</h3>
          <p className='item__p'>Lorem ipsum dolor cras</p>
        </div>
        <div className='box__item'
          style={{background:`url(${travel5})  no-repeat center/250%`}}
        >
          <hr className='hr'/>
          <h3 className='item__h3'>San Diego Bay California</h3>
          <p className='item__p'>Lorem ipsum dolor cras</p>
        </div>
        <div className='box__item'
          style={{background:`url(${travel6}) no-repeat center/250%`}}
        >
          <hr className='hr'/>
          <h3 className='item__h3'>San Quintin Rivera</h3>
          <p className='item__p'>Lorem ipsum dolor cras</p>
        </div>
      </div>
      <div className='travel__information'
        style={{background:`url(${travelInfo}) no-repeat center/100%`}}
      >
        <div className='info__box'>
          <div className='info__item'>
            <h3 className='info__h3'>How to reserve</h3>
            <hr className='info__hr'/>
            <p className='info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem!</p>
            <NavLink className='readmore__btn'>
              <span className='readmore__span'>Read More</span>
            </NavLink>
          </div>
          <div className='info__item'>
            <h3 className='info__h3'>Hotel information</h3>
            <hr className='info__hr'/>
            <p className='info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem!</p>
            <NavLink className='readmore__btn'>
              <span className='readmore__span'>Read More</span>
            </NavLink>
          </div>
          <div className='info__item'>
            <h3 className='info__h3'>Services and Amenities</h3>
            <hr className='info__hr'/>
            <p className='info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem!</p>
            <NavLink className='readmore__btn'>
              <span className='readmore__span'>Read More</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )   
}

export default Destinations;