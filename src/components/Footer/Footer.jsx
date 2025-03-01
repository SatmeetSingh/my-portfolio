import { Link } from 'react-scroll';
import styles from './Footer.module.css';
import { IoIosArrowDropright } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className="flex justify-around  max-md:text-base max-md:flex-col max-md:items-center max-md:w-[100%]   ">
        <div className={styles.text}>
          <p className="font-semibold  text-2xl mb-2">
            Satmeet&apos;s Portfolio
          </p>
          <span className="mb-2">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </span>
          <spam>Keep Rising 🚀.</spam>
        </div>
        <div className="flex flex-col gap-2 max-md:hidden">
          <h1 className="font-medium text-2xl mb-2">Quick Links</h1>
          <Link
            to="/"
            smooth={true}
            duration={500}
            className={`hover:scale-125 transition-all duration-100 cursor-pointer ${styles.item}`}
          >
            <IoIosArrowDropright />
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`hover:scale-125 transition-all duration-100 cursor-pointer ${styles.item}`}
          >
            <IoIosArrowDropright />
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`hover:scale-125 transition-all duration-100 cursor-pointer ${styles.item}`}
          >
            <IoIosArrowDropright />
            Skills
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className={`hover:scale-125 transition-all duration-100 cursor-pointer ${styles.item}`}
          >
            <IoIosArrowDropright />
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`hover:scale-125 transition-all duration-100 cursor-pointer ${styles.item}`}
          >
            <IoIosArrowDropright />
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="font-medium text-2xl mb-2">Contact Info</h1>
          <h2 className={styles.item1}>
            <FaPhone color="green" size={15} />
            +91 XXX-XXX-XXXX
          </h2>
          <h2 className={styles.item1}>
            <MdEmail color="green" size={15} />
            satmeetarora@gmail.com
          </h2>
          <h2 className={styles.item1}>
            <FaMapLocationDot color="green" size={15} />
            Ludhiana, India-141013
          </h2>
          <div className={styles.icon}>
            <a
              href="https://github.com/SatmeetSingh"
              rel="noreferrer"
              target="_blank"
              className="  p-3 rounded-full bg-white hover:bg-black"
            >
              <FiGithub color="green" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/satmeet-singh-a025a516a/"
              rel="noreferrer"
              target="_blank"
              className="  p-3 rounded-full bg-white hover:bg-black"
            >
              <CiLinkedin color="green" size={20} />
            </a>
            <a
              href="mailto:satmeetarora@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="  p-3 rounded-full bg-white  hover:bg-black"
            >
              <MdEmail color="green" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.myLine}></div>
      <div className="font-semibold text-center text-sm mb-4">
        Created By Satmeet Singh
      </div>
    </div>
  );
}

export default Footer;
