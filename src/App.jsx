import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';
import BlogsSection from './components/Blogs/BlogsSection';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Experience/Education';

function App() {
  const Dark = useSelector((state) => state.navbar.darkMode);
  return (
    <div
      className={` min-h-[100%] transition-all 
    duration-500  
    ease-in-out  
    ${Dark ? 'bg-[#222222] text-white ' : 'bg-white/75 text-black'} h-[100%]`}
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
            >
              <Route index element={<Experience />} />
              <Route path="education" element={<Education />} />
            </Route>
            <Route path="/blogs" element={<BlogsSection />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
