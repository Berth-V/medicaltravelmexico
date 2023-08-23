import { NavLink } from 'react-router-dom';
import './Procedures.css';
import card from '/dr hans.jpeg';


function Procedures() {
  return (
    <div className='procedures'>
      <h2 className='procedures__tittle'>Choose your Doctor</h2>
      <div className='cards__container'>
        <NavLink className='card__link'
          to='/bariatric'
        >
            <div className='card'>
          <img className='card__img'
            src={card}
          />
          <h3 className='speciality__tittle'>
            Bariatric
          </h3>
          <span className='doctor__name'>
            Dr. Hans Ruiz
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
            </div>
        </NavLink>
        <NavLink className='card__link'
          to='/plasticsurgery'
        >
            <div className='card'>
          <img className='card__img' 
            src={card}
          />
          <h3 className='speciality__tittle'>
            Plastic Surgery
          </h3>
          <span className='doctor__name'>
            Dr. Hans Ruiz
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
            </div>
        </NavLink>
        <NavLink className='card__link'
          to='/traumatology'>
            <div className='card'>
          <img className='card__img'
            src={card}
          />
          <h3 className='speciality__tittle'>
            Traumatology
          </h3>
          <span className='doctor__name'>
            Dr. Hans Ruiz
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
            </div>
        </NavLink>
        <NavLink className='card__link'
          to='/otolaryngologist'>
            <div className='card'>
          <img className='card__img'
            src={card}
          />
          <h3 className='speciality__tittle'>
            Otolaryngologist
          </h3>
          <span className='doctor__name'>
            Dr. Hans Ruiz
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
            </div>
        </NavLink> 
      </div>
    </div>
  )
}

export default Procedures;