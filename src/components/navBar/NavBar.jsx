import DarkMode from '../../utils/DarkMode';
import styles from './navBar.module.css';
import { Link } from 'react-scroll';
import { BsLayers } from 'react-icons/bs';
import { FiLayers } from 'react-icons/fi';
import { CiHome } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { GoPerson, GoPersonAdd } from 'react-icons/go';
import { GiBlackBook, GiOpenBook } from 'react-icons/gi';
import { LuMail, LuMailOpen } from 'react-icons/lu';
import { useSelector } from 'react-redux';

function NavBar() {
  const Dark = useSelector((state) => state.navbar.darkMode);

  let a = false;
  return (
    <div className={styles.top}>
      <div className={styles.navbar}>
        <div
          className={`${styles.bar} py-1 px-10 rounded-full ${
            Dark ? 'bg-white/65 text-black' : 'bg-black/75 text-white'
          }`}
        >
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-250 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-250 cursor-pointer"
          >
            About me
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-250 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-250  cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-250 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-250 cursor-pointer"
          >
            Contact
          </Link>
          <DarkMode />
        </div>
      </div>
      <div className={styles.navbar1}>
        <div
          className={`${styles.bar} py-1 px-10 rounded-full ${
            Dark ? 'bg-white/65 text-black' : 'bg-black/75 text-white'
          }`}
        >
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all  ease-in-out duration-200"
          >
            {a ? <IoHomeOutline size={25} /> : <CiHome size={25} />}
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all  ease-in-out duration-200"
          >
            {a ? <FiLayers size={25} /> : <BsLayers size={25} />}
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all  ease-in-out duration-200"
          >
            {a ? <GiOpenBook size={25} /> : <GiBlackBook size={25} />}
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-200"
          >
            {a ? <GoPersonAdd size={25} /> : <GoPerson size={25} />}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:scale-125 transition-all ease-in-out duration-200"
          >
            {a ? <LuMailOpen size={25} /> : <LuMail size={25} />}
          </Link>
          <DarkMode />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
