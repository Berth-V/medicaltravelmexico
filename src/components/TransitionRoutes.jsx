import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './Home/Home';
import About from './About';
import Procedures from "./Procedures/Procedures/";
import Contact from './Contact/Contact';

function TransitionRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/procedures' element={<Procedures />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

export default TransitionRoutes;