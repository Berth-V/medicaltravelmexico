import '../components/About.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {DiHtml5, DiCss3, DiJavascript} from 'react-icons/di'
import {SiReact, SiFramer} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
  
function About() {
  
  //Framer Motion Variants//
  const skillsAnimation={
    start:{scale:0},
    onStay:{
      scale:1,
      transition:{
        delayChildren:0.3,
        staggerChildren:0.2
      }
    },
    leave:{scale: 0}
  }
  return (
    <div className='about'>
        <div className='about__description'
        >
          <h1 className='about__h1'>
            About
          </h1>
          <p className='about__p'
            variants={skillsAnimation}
          >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt repellat dicta! 
           Architecto numquam blanditiis vel sint nam voluptatem. Possimus tempore adipisci 
           delectus nostrum nulla ullam culpa incidunt. Vero, beatae. Quod, qui soluta placeat at 
           expedita provident eaque rerum magni facere iste! Blanditiis, natus sed quos reiciendis, 
           itaque quas maiores consectetur omnis quidem pariatur adipisci dolore neque. Cumque, impedit soluta.         
          </p>
       </div>
    </div>
  )
}

export default About;