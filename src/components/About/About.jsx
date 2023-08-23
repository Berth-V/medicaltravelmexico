import './About.css';
import mission from '/mission.png';
import vision from '/vision.png';  
import valors from '/valors.png';  

function About() {
  return (
    <div className='about'>
        <div className='about__description'>
          <h1 className='about__h1'>
            About Medical Travel Mexico
          </h1>
          <p className='about__p'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt repellat dicta! 
           Architecto numquam blanditiis vel sint nam voluptatem. Possimus tempore adipisci 
           delectus nostrum nulla ullam culpa incidunt. Vero, beatae. Quod, qui soluta placeat at 
           expedita provident eaque rerum magni facere iste! Blanditiis, natus sed quos reiciendis, 
           itaque quas maiores consectetur omnis quidem pariatur adipisci dolore neque. Cumque, impedit soluta.         
          </p>
       </div>
       <div className='mission__description'>
        <div  className='mission__item'>
          <h3 className='mission__h3'>Mission</h3>
          <p className='mission__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores et cum itaque nostrum 
            officiis maiores vel molestias. A dicta sequi, minima sint iste ab, ea molestias ipsum voluptates 
            illum similique consequuntur obcaecati odio rem.
          </p>
          <img className='mission__img' src={mission}/>
        </div>
        <div  className='mission__item'>
          <h3 className='mission__h3'>Vision</h3>
          <p className='mission__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores et cum itaque nostrum 
            officiis maiores vel molestias. A dicta sequi, minima sint iste ab, ea molestias ipsum voluptates 
            illum similique consequuntur obcaecati odio rem.
          </p>
          <img className='mission__img' src={vision}/>
        </div>
      <div  className='mission__item'>
        <h3 className='mission__h3'>Valors</h3>
        <p className='mission__p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores et cum itaque nostrum 
          officiis maiores vel molestias. A dicta sequi, minima sint iste ab, ea molestias ipsum voluptates 
          illum similique consequuntur obcaecati odio rem.
        </p>
        <img className='mission__img' src={valors}/>
        </div>
       </div>
    </div>
  )
}

export default About;