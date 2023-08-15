import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Home from '../Home/Home';
import Procedures from "../Procedures/Procedures";
import Destinations from '../Destinations/Destinations';
import Packages from "../Packages/Packages";
import About from '../About/About';

function TransitionRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/procedures' element={<Procedures />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

export default TransitionRoutes;