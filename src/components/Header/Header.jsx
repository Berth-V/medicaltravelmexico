import './Header.css';
import {useState} from 'react';
import logo from '/medical logo.avif';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FaBars} from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcedureHover, setIsProcedureHover] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickAway = () => {
    setIsOpen(false);
  };
  // Framer Motion Variants //
  const dropDownNavVariants = {
    show: {top: '65px', transition: {duration: 0.2}},
    hide: {top: '-260px', transition: {duration: 0.2}},
  };
  const toggleAnimation = {
    open: {left: '0', display: 'var(--toggle-btn-display)'},
    closed: {left: '-100vw', display: 'var(--toggle-btn-display)'},
  };

  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <img className='logo' src={logo} />
          <motion.div onClick={handleClick}>
            <FaBars className='toggle__btn' />
          </motion.div>
          {/* ul For Desktop Mode */}
          <ul className='nav__ul'>
            <li className='nav__li'>
              <NavLink className='nav__link' to='/'>
                <span className='nav__span'>
                  <b>Home</b>
                </span>
              </NavLink>
            </li>
            <li
              className='nav__li'
              onMouseEnter={() => setIsProcedureHover(true)}
              onMouseLeave={() => setIsProcedureHover(false)}
            >
              <NavLink className='nav__link' to='/procedures'>
                <span className='nav__span'>
                  <b>Procedures</b>
                </span>
              </NavLink>
              {/* Dropdown Nav */}
              <motion.div
                className='procedures__extension'
                // Framer Motion Attributtes //
                variants={dropDownNavVariants}
                animate={isProcedureHover ? 'show' : 'hide'}
              >
                <li className='nav__li'>
                  <NavLink className='nav__link' to='/bariatric'>
                    <span className='nav__span'>Bariatric</span>
                  </NavLink>
                </li>
                <li className='nav__li'>
                  <NavLink className='nav__link' to='/oto'>
                    <span className='nav__span'>Otolaryngologist</span>
                  </NavLink>
                </li>
                <li className='nav__li'>
                  <NavLink className='nav__link' to='/plastic'>
                    <span className='nav__span'>Plastic Surgery</span>
                  </NavLink>
                </li>
                <li className='nav__li'>
                  <NavLink className='nav__link' to='/trauma'>
                    <span className='nav__span'>Traumatology</span>
                  </NavLink>
                </li>
              </motion.div>
            </li>
            <li className='nav__li'>
              <NavLink className='nav__link' to='/destinations'>
                <span className='nav__span'>
                  <b>Destinations</b>
                </span>
              </NavLink>
            </li>
            <li className='nav__li'>
              <NavLink className='nav__link' to='/about'>
                <span className='nav__span'>
                  <b>About</b>
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* ul For Mobile Mode */}
      <motion.div
        className='nav__ul2'
        // Framer Motion Attributtes //
        variants={toggleAnimation}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className='nav__li2'>
          <NavLink className='nav__link2' to='/'>
            <span className='nav__span2' onClick={handleClickAway}>
              <b>Home</b>
            </span>
          </NavLink>
        </div>
        <div className='nav__li2'>
          <NavLink className='nav__link2' to='/procedures'>
            <span className='nav__span2' onClick={handleClickAway}>
              <b>Procedures</b>
            </span>
          </NavLink>
        </div>
        <div className='nav__li2'>
          <NavLink className='nav__link2' to='/destinations'>
            <span className='nav__span2' onClick={handleClickAway}>
              <b>Destinations</b>
            </span>
          </NavLink>
        </div>
        <div className='nav__li2'>
          <NavLink className='nav__link2' to='/about'>
            <span className='nav__span2' onClick={handleClickAway}>
              <b>About</b>
            </span>
          </NavLink>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
