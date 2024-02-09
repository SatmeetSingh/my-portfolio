import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Home from "./components/Home/Home";
import { useSelector } from "react-redux";

function App() {
  const Dark = useSelector((state) => state.navbar.darkMode);
  return (
    <div
      className={` overflow-hidden min-h-[100%] transition-all  
    duration-500  
    ease-in-out  
    ${Dark ? "bg-black text-white " : "bg-white text-black"} h-[500vh]`}
    >
      <div className="h-screen">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
