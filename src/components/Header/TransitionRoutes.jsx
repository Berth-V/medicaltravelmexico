import {lazy, Suspense, useEffect} from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
const Home = lazy(() => import('../Home/Home'))  
const Procedures = lazy(() => import("../Procedures/Procedures"))  
const Destinations = lazy(() => import('../Destinations/Destinations'))  
const About = lazy(() => import('../About/About'))  
const Bariatric = lazy(() => import("../Procedures/Bariatric/Bariatric"))  
const PlasticSurgery = lazy(() => import('../Procedures/PlasticSurgery/PlasticSurgery'))  
const Otolaryngologist = lazy(() => import("../Procedures/Otolaryngologist/Otolaryngologist"))  
const Traumatology = lazy(() => import('../Procedures/Traumatology/Traumatology'))  

function TransitionRoutes() {
    const location = useLocation();
    useEffect(()=>{
      scrollTo(0,0);
    },[location])
    
  return (
    <Suspense fallback={<h1>Cargando</h1>}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Navigate to='/' />} />
          <Route path='/procedures' element={<Procedures />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/about' element={<About />} />
          <Route path='/bariatric' element={<Bariatric />} />
          <Route path='/plasticsurgery' element={<PlasticSurgery />} />
          <Route path='/traumatology' element={<Traumatology />} />
          <Route path='/otolaryngologist' element={<Otolaryngologist />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default TransitionRoutes;