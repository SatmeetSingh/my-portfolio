import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';

import ParticlesComponent from './utils/Particles/Particles';
import Particles from '@tsparticles/react';

function App() {
  const Dark = useSelector((state) => state.navbar.darkMode);
  return (
    <div
      className={` min-h-[100%] transition-all 
    duration-500  
    ease-in-out  
    ${Dark ? 'bg-[#222222] text-white ' : 'bg-white/75 text-black'} h-[100%]`}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <section id="/">
                <Home />
              </section>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
