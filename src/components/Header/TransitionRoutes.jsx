import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {useEffect} from "react";
import Home from '../Home/Home';
import Procedures from "../Procedures/Procedures";
import Destinations from '../Destinations/Destinations';
import Packages from "../Packages/Packages";
import About from '../About/About';
import Bariatric from "../Procedures/Bariatric/Bariatric";
import PlasticSurgery from '../Procedures/PlasticSurgery/PlasticSurgery';
import Otolaryngologist from "../Procedures/Otolaryngologist/Otolaryngologist";
import Traumatology from '../Procedures/Traumatology/Traumatology';

function TransitionRoutes() {
    const location = useLocation();
    useEffect(()=>{
      scrollTo(0,0);
    },[location])
    
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='/procedures' element={<Procedures />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/about' element={<About />} />
        <Route path='/bariatric' element={<Bariatric />} />
        <Route path='/plasticsurgery' element={<PlasticSurgery />} />
        <Route path='/traumatology' element={<Traumatology />} />
        <Route path='/otolaryngologist' element={<Otolaryngologist />} />
      </Routes>
    </AnimatePresence>
  )
}

export default TransitionRoutes;