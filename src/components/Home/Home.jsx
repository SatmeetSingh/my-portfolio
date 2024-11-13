import Button from '../../utils/Button';
import { CiMail } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';
import styles from './home.module.css';
import Quote from './Quote';
import Skills from '../Skills/Skills';
import Project from '../Projects/Project';
import About from '../About/About';
import ContactMe from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.line}></div>
      <div className={styles.icon}>
        <a
          href="https://github.com/SatmeetSingh"
          rel="noreferrer"
          target="_blank"
        >
          <FiGithub color="green" size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/satmeet-singh-a025a516a/"
          rel="noreferrer"
          target="_blank"
        >
          <CiLinkedin color="green" size={30} />
        </a>
      </div>
      <div className={styles.intro}>
        <div
          className={`${styles.img}  shadow-xl  hover:drop-shadow-xl   `}
        ></div>
        <div className={styles.name}>
          Hi, I&apos;m Satmeet Singh
          <img src="./images/waving-hand.png" className={styles.wave} />
        </div>
        <div className={styles.profession}>Developer based in India</div>
        <div className={styles.text}>
          <p>
            My name is Satmeet Singh, a passionate developer with a strong
            foundation in Node.js, NestJS, C#, .NET, SQL, and MongoDB. My goal
            is to advance my career by contributing to inspiring projects
            focused on creating clean, user-friendly websites and applications.
            I turn caffeine into code, one line at a time, blending creativity
            with technical expertise and a touch of down-to-earth charm.
          </p>
        </div>
        <div className={styles.btn}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:scale-110 transition-all duration-200"
          >
            <Button>
              <CiMail size={25} />
              <p>Contact me</p>
            </Button>
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="hover:scale-110 transition-all duration-200"
          >
            <Button>
              <FiGithub />
              <p>My Projects</p>
            </Button>
          </Link>
        </div>
      </div>

      <Quote />
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
