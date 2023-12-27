import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Experience2, TechIcon } from "./components";
import  About from "./pages/About";
import  Home from "./pages/Home";
import Portfolio from './pages/Portfolio';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/experience' element={<Experience2 />}/>
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
