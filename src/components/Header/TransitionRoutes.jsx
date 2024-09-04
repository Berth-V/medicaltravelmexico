import {lazy, Suspense, useEffect, useState} from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
const Home = lazy(() => import('../Home/Home'));
const Procedures = lazy(() => import('../Procedures/Procedures'));
const Destinations = lazy(() => import('../Destinations/Destinations'));
const About = lazy(() => import('../About/About'));
const Bariatric = lazy(() => import('../Procedures/Bariatric/Bariatric'));
const PlasticSurgery = lazy(
  () => import('../Procedures/PlasticSurgery/PlasticSurgery'),
);
const Otolaryngologist = lazy(
  () => import('../Procedures/Otolaryngologist/Otolaryngologist'),
);
const Traumatology = lazy(
  () => import('../Procedures/Traumatology/Traumatology'),
);

function TransitionRoutes() {
  const location = useLocation();
  // State to capture an String without "/" of location.pathname
  const [newPath, SetNewPath] = useState();
  useEffect(() => {
    scrollTo(0, 0);
    SetNewPath(location.pathname.slice(1));
  }, [location]);

  return (
    <Suspense fallback={<h1>Cargando</h1>}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Navigate to='/' />} />
          <Route path='/procedures' element={<Procedures />} />
          <Route
            path='/destinations'
            element={<Destinations newPath={newPath} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/bariatric' element={<Bariatric newPath={newPath} />} />
          <Route
            path='/plastic'
            element={<PlasticSurgery newPath={newPath} />}
          />
          <Route path='/trauma' element={<Traumatology newPath={newPath} />} />
          <Route path='/oto' element={<Otolaryngologist newPath={newPath} />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default TransitionRoutes;
