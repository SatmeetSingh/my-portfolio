import DarkMode from "../../utils/DarkMode";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import { BsLayers } from "react-icons/bs";
import { FiLayers } from "react-icons/fi";
import { CiHome } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson, GoPersonAdd } from "react-icons/go";
import { GiBlackBook, GiOpenBook } from "react-icons/gi";
import { LuMail, LuMailOpen } from "react-icons/lu";
import { useSelector } from "react-redux";

function NavBar() {
  const Dark = useSelector((state) => state.navbar.darkMode);

  let a = false;
  return (
    <div className={styles.top}>
      <div className={styles.navbar}>
        <div
          className={`${styles.bar} py-1 px-10 rounded-full ${
            Dark ? "bg-white/65 text-black" : "bg-black/75 text-white"
          }`}
        >
          <Link to="/" className="hover:scale-125 transition-all duration-100">
            Home
          </Link>
          <Link className="hover:scale-125 transition-all duration-100">
            Skills
          </Link>
          <Link className="hover:scale-125 transition-all duration-100">
            Projects
          </Link>
          <Link className="hover:scale-125 transition-all duration-100">
            About me
          </Link>
          <Link className="hover:scale-125 transition-all duration-100">
            Contact
          </Link>
          <DarkMode />
        </div>
      </div>
      <div className={styles.navbar1}>
        <div
          className={`${styles.bar} py-1 px-10 rounded-full ${
            Dark ? "bg-white/65 text-black" : "bg-black/75 text-white"
          }`}
        >
          <Link to="/" className="hover:scale-125 transition-all duration-200">
            {a ? <IoHomeOutline size={25} /> : <CiHome size={25} />}
          </Link>
          <Link className="hover:scale-125 transition-all duration-200">
            {a ? <FiLayers size={25} /> : <BsLayers size={25} />}
          </Link>
          <Link className="hover:scale-125 transition-all duration-200">
            {a ? <GiOpenBook size={25} /> : <GiBlackBook size={25} />}
          </Link>
          <Link className="hover:scale-125 transition-all duration-200">
            {a ? <GoPersonAdd size={25} /> : <GoPerson size={25} />}
          </Link>
          <Link className="hover:scale-125 transition-all duration-200">
            {a ? <LuMailOpen size={25} /> : <LuMail size={25} />}
          </Link>
          <DarkMode />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
