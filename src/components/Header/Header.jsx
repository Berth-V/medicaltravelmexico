import "./Header.css";
import { useState } from "react";
import logo from "/transparent logo2.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickAway = () => {
    setIsOpen(false);
  };
  // Framer Motion Variants //
  const hoverVariants = {
    hover: {
      scale: 1.05,
    },
  };
  const toggleAnimation = {
    open: { left: "0", display: "var(--toggle-btn-dis)" },
    closed: { left: "-100vw", display: "var(--toggle-btn-dis)" },
  };

  return (
    <>
      <nav className="nav">
        <img className="logo" src={logo} />
        <motion.div onClick={handleClick}>
          <FaBars className="toggle__btn" />
        </motion.div>
        <ul className="nav__ul">
          <motion.li
            className="nav__li"
            variants={hoverVariants}
            whileHover={"hover"}
          >
            <NavLink className="nav__link" to="/">
              <span className="nav__span">
                <b>Home</b>
              </span>
            </NavLink>
          </motion.li>
          <motion.li
            className="nav__li"
            variants={hoverVariants}
            whileHover={"hover"}
          >
            <NavLink className="nav__link" to="/procedures">
              <span className="nav__span">
                <b>Procedures</b>
              </span>
            </NavLink>
          </motion.li>
          <motion.li
            className="nav__li"
            variants={hoverVariants}
            whileHover={"hover"}
          >
            <NavLink className="nav__link" to="/destinations">
              <span className="nav__span">
                <b>Destinations</b>
              </span>
            </NavLink>
          </motion.li>
          <motion.li
            className="nav__li"
            variants={hoverVariants}
            whileHover={"hover"}
          >
            <NavLink className="nav__link" to="/about">
              <span className="nav__span">
                <b>About</b>
              </span>
            </NavLink>
          </motion.li>
        </ul>
      </nav>
      <motion.div
        className="nav__ul2"
        variants={toggleAnimation}
        animate={isOpen ? "open" : "closed"}
      >
        <div className="nav__li2">
          <NavLink className="nav__link2" to="/">
            <span className="nav__span2" onClick={handleClickAway}>
              <b>Home</b>
            </span>
          </NavLink>
        </div>
        <div className="nav__li2">
          <NavLink className="nav__link2" to="/procedures">
            <span className="nav__span2" onClick={handleClickAway}>
              <b>Procedures</b>
            </span>
          </NavLink>
        </div>
        <div className="nav__li2">
          <NavLink className="nav__link2" to="/destinations">
            <span className="nav__span2" onClick={handleClickAway}>
              <b>Destinations</b>
            </span>
          </NavLink>
        </div>
        <div className="nav__li2">
          <NavLink className="nav__link2" to="/about">
            <span className="nav__span2" onClick={handleClickAway}>
              <b>About</b>
            </span>
          </NavLink>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
