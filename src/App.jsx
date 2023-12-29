import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, StarsCanvas, Experience2 } from "./components";

import About from "./pages/About";
import Home from "./pages/Home";
import Paramount from "./pages/Paramount";
import Target from './pages/Target';
import TheAgency from './pages/TheAgency';
import Portfolio from './pages/Portfolio'

import ParkourAnimation from './pages/projects/ParkourAnimation';
import FireStarter from './pages/projects/FireStarter';
import GLRobot from './pages/projects/GLRobot';
import GulfEnergy from './pages/projects/GulfEnergy';
import PolarDash from './pages/projects/PolarDash';
import PortfolioProject from './pages/projects/PortfolioProject';
import RiggingStudy from './pages/projects/RiggingStudy'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/experience' element={<Experience2 />}/>
        <Route path='/paramount' element={<Paramount />}/>
        <Route path='/theAgency' element={<TheAgency />}/>
        <Route path='/target' element={<Target />}/>
        <Route path='/parkourAnimation' element={<ParkourAnimation />}/>
        <Route path='/fireStarter' element={<FireStarter />}/>
        <Route path='/glRobot' element={<GLRobot />}/>
        <Route path='/gulfEnergy' element={<GulfEnergy />}/>
        <Route path='/polarDash' element={<PolarDash />}/>
        <Route path='/portfolioProject' element={<PortfolioProject />}/>
        <Route path='/riggingStudy' element={<RiggingStudy />}/>
      </Routes>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
