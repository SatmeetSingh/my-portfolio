import Button from "../../utils/Button";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import styles from "./home.module.css";
import Quote from "./Quote";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.line}></div>
      <div className={styles.icon}>
        <a href="https://github.com/SatmeetSingh">
          <FiGithub color="green" size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/satmeet-singh-a025a516a/"
          className={styles.linkdin}
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
        <div className={styles.profession}>
          FrontEnd Developer based in India
        </div>
        <div className={styles.text}>
          <p>
            My name is Satmeet Singh,a frontend developer with a goal of
            advancing my career and participating in inspiring projects
            dedicated to creating clean, user-friendly websites. Turning
            caffeine into code, one line at a time, with a sprinkle of
            creativity and a touch of down-to-earth charm.
          </p>
        </div>
        <div className={styles.btn}>
          <Button>
            <CiMail size={25} />
            Contact me
          </Button>
          <Button>
            <FiGithub />
            My Projects
          </Button>
        </div>
      </div>
      <Quote />
    </div>
  );
}

export default Home;
