import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import About from './components/About/About';

function App() {
  const Dark = useSelector((state) => state.navbar.darkMode);
  return (
    <div
      className={` min-h-[100%] transition-all 
    duration-500  
    ease-in-out  
    ${Dark ? 'bg-black/65 text-white ' : 'bg-white/75 text-black'} h-[500vh]`}
    >
      <div className="">
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
    </div>
  );
}

export default App;
