import './App.css';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import TransitionRoutes from './components/Header/TransitionRoutes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <TransitionRoutes />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
