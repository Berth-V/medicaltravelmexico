import './Header.css';
import logo from '/transparent logo2.png';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';

function Header() {
  
  //Framer Motion variants//
  const hoverVariants={
    hover:{
      scale: 1.05
    }
  }

  return (
    <nav className='nav'>
      <img className='logo' src={logo}/>
      <ul className='nav__ul'>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/'>
            <span className='nav__span'><b>Home</b></span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/procedures'>
            <span className='nav__span'><b>Procedures</b></span>
          </NavLink>
        </motion.li>        
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/destinations'>
            <span className='nav__span'><b>Destinations</b></span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/packages'>
            <span className='nav__span'><b>Packages</b></span>
          </NavLink>
        </motion.li>
        <motion.li className='nav__li'
          variants={hoverVariants}
          whileHover={'hover'}
        >
          <NavLink className='nav__link' to='/about'>
            <span className='nav__span'><b>About</b></span>
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  )
}

export default Header;