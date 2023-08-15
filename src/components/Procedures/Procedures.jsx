import './Procedures.css';
import card from '/doctor card.jpeg';

function Procedures() {
  return (
    <div className='procedures'>
      <h2 className='procedures__tittle'>Our Procedures</h2>
      <div className='cards__container'>
        <div className='card'>
          <img className='card__img'
            src={card}
          />
          <h3 className='speciality__tittle'>
            Speciality
          </h3>
          <span className='doctor__name'>
            Name
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
        </div>
        <div className='card'>
          <img className='card__img' 
            src={card}
          />
          <h3 className='speciality__tittle'>
            Speciality
          </h3>
          <span className='doctor__name'>
            Name
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
        </div>
        <div className='card'>
          <img className='card__img'
            src={card}
          />
          <h3 className='speciality__tittle'>
            Speciality
          </h3>
          <span className='doctor__name'>
            Name
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
        </div>
        <div className='card'>
          <img className='card__img'
            src={card}
          />
          <h3 className='speciality__tittle'>
            Speciality
          </h3>
          <span className='doctor__name'>
            Name
          </span>
          <p className='card__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet error 
            consectetur a accusantium porro impedit, est rerum? Tenetur vero 
            deleniti, provident officia
          </p>
        </div>
      </div>
    </div>
  )
}
export default Procedures;