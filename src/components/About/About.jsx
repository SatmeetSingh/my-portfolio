import { useSelector } from 'react-redux';
import { SmallButton } from '../../utils/Button';
import styles from './About.module.css';

function About() {
  const Dark = useSelector((state) => state.navbar.darkMode);
  return (
    <div
      className={`${styles.about}
         ${Dark ? 'bg-white/65 text-black' : 'bg-[#222222] text-white'}
         `}
    >
      <div className={styles.intro}>
        <p>
          <span className="text-[Orange]">&lt;</span>
          <span className={` ${Dark ? 'text-black ' : 'text-white'}`}>
            About Me
          </span>
          <span className="text-[Orange]">/&gt;</span>
        </p>
      </div>
      <div className={styles.text}>
        <div className="h-auto rounded-2xl px-8 py-16 pt-8 w-[50%]  max-lg:w-full  max-lg:pt-10 flex flex-col gap-8">
          <h3 className="text-4xl">Satmeet Singh</h3>
          <div className="flex flex-col gap-4 text-base">
            <h2>
              I am a dedicated developer with 1 year of experience, specializing
              in JavaScript, Node.js, React, and .NET technologies. Recently, I
              contributed to a web API project in NestJS, where I managed the
              migration from TypeORM to Sequelize, focusing on database
              connection setup and manual API testing using Swagger.
            </h2>
            <h2>
              I&apos;m motivated by solving complex problems and building
              efficient systems that make a tangible impact. My goal is to
              further enhance my backend development skills and contribute to
              innovative, scalable projects.
            </h2>
            <h2>Feel free to explore my work and connect!</h2>
          </div>
          <div>
            <h4>
              <span className="text-[Blue]">Email: </span>satmeetarora@gmail.com
            </h4>
            <h4>
              <span className="text-[Blue]">Place: </span>Ludhiana, India-141013
            </h4>
          </div>
          <SmallButton>
            <a
              href="./Satmeet_Singh_Resume.pdf"
              download="Satmeet_Singh_Resume.pdf"
            >
              Resume
            </a>
          </SmallButton>
        </div>
        <div
          className={`${styles.img}  shadow-slate-700  hover:drop-shadow-xl rounded-2xl  dark-shadow shadow-[10px_15px_40px_-5px_rgba(0,0,0,0.5)] max-lg:hidden`}
        ></div>
      </div>
    </div>
  );
}

export default About;
