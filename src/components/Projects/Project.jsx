import { SmallBox, SmallButton } from '../../utils/Button';
import styles from './Project.module.css';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

let projectsArray = [
  {
    Title: 'FastPizza App',
    Skills: ['Javascript', 'Css', 'Html', 'Tailwind', 'ReactJs'],
    Description:
      'Fast React Pizza Co. is a web application for online pizza ordering, built with React. It features an intuitive interface that allows users to customize their pizza, view the menu, and manage their shopping cart seamlessly. The application is designed responsively, providing a smooth user experience across different devices.',
    link: 'https://github.com/SatmeetSingh/Fast-pizza-App',
    page: 'https://vasu-fast-react-pizza-co.netlify.app/',
  },
  {
    Title: 'My Portfolio',
    Skills: ['Javascript', 'Css', 'Html', 'Tailwind', 'ReactJs'],
    Description:
      'A dynamic web application built with React, designed to showcase my skills in frontend development and UI/UX design. This project features responsive design, interactive components, and seamless user experiences, highlighting my ability to create visually appealing and functional applications.',
    link: 'https://github.com/SatmeetSingh/my-portfolio',
    page: 'https://satmeetsingh-webdeveloper.vercel.app',
  },
  {
    Title: 'Connectly (Social Media)',
    Skills: [
      'C#',
      'Asp.Net WebAPI',
      'Typescript',
      'React',
      'Redux-toolkit',
      'Tailwind',
      'EF',
      'SQL Server',
      'Swagger',
    ],
    Description:
      'Instagram clone in making - both Frontend and backend - trying to make it as complete as possible | will be refactoring and improving it as it gets completed - check it',
    link: 'https://github.com/SatmeetSingh/connectly-backend',
    page: '',
  },
  {
    Title: 'Whispers-of-Destiny RPGTextGame',
    Skills: ['C#', '.net'],
    Description:
      'RPGTextGame is a console-based adventure game where players explore different areas, interact with NPCs, battle enemies, and manage their inventory. The game offers a turn-based combat system, a character creation feature, and various in-game locations like towns, forests, and inns for an immersive RPG experience.',
    link: 'https://github.com/SatmeetSingh/Whispers-of-Destiny_RPGText-Game',
    page: '',
  },
];

function Project() {
  const Dark = useSelector((state) => state.navbar.darkMode);

  const [projects, setProjects] = useState(projectsArray);
  // eslint-disable-next-line no-unused-vars
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;

      if (width > 1200) {
        setItemsToShow(3);
      } else if (width > 828) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };
    updateItemsToShow(); // Initial call
    window.addEventListener('resize', updateItemsToShow); // Listen for window resize

    return () => window.removeEventListener('resize', updateItemsToShow); // Cleanup
  }, []);
  function handleRightClick() {
    setProjects((prevProj) => {
      const newproj = [
        prevProj[prevProj.length - 1],
        ...prevProj.slice(0, prevProj.length - 1),
      ];
      return newproj;
    });
  }

  function handleLeftClick() {
    setProjects((prevProj) => {
      const newproj = [...prevProj.slice(1), prevProj[0]];
      return newproj;
    });
  }
  return (
    <div className={styles.project}>
      <div className={styles.intro}>
        <p>
          <span className="text-[Orange]">&lt;</span>
          <span className={`${Dark ? 'text-white' : 'text-black'}`}>
            Projects
          </span>
          <span className="text-[Orange]">/&gt;</span>
        </p>
        <h3 className="mb-16">My Project Gallery</h3>
      </div>
      <div className={styles.projectBoxes}>
        <div className="h-auto rounded-2xl px-8 py-8 max-sm:p-4 flex gap-6 z-10 dark-shadow border-2  bg-[#f6e7e7] ">
          <p
            className=" transition-all duration-200 hover:-translate-x-1 hover:scale-x-110  text-black "
            onClick={handleLeftClick}
          >
            <FaRegArrowAltCircleLeft size={30} />
          </p>
          {projects
            .slice(startIndex, startIndex + itemsToShow)
            .map((project) => (
              <div
                key={project.Title}
                className={`cursor-pointer  bg-[#f1e5e5] border-blue-600 flex-1 flex flex-col gap-4 rounded-2xl px-4 py-4  ${styles.items} hover:scale-100 hover:drop-shadow-xl transition-all duration-200 hover:-translate-y-1  shadow-[10px_25px_50px_-5px_rgba(0,0,0,0.5)] `}
              >
                <div className="font-bold text-2xl text-center text-black">
                  <h5>{project.Title}</h5>
                </div>
                {/* <h3>{project.Skills}</h3> */}
                <div className={`flex flex-wrap gap-2  `}>
                  {project.Skills.map((skill) => (
                    <div
                      className="flex items-center justify-center "
                      key={skill}
                    >
                      <SmallBox>{skill}</SmallBox>
                    </div>
                  ))}
                </div>
                <p className={styles.text}>{project.Description}</p>
                <div className={styles.btn}>
                  {project.link !== '' && (
                    <SmallButton>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-1 items-center"
                      >
                        <RiGitRepositoryLine size={18} />
                        Project
                      </a>
                    </SmallButton>
                  )}
                  {project.page !== '' && (
                    <SmallButton>
                      <a
                        href={project.page}
                        target="_blank"
                        rel="noreferrer"
                        className="flex gap-1 items-center"
                      >
                        <FaExternalLinkAlt size={15} />
                        Website
                      </a>
                    </SmallButton>
                  )}
                </div>
              </div>
            ))}
          <p
            className="transition-all duration-200 hover:-translate-x-[-.25rem] hover:scale-x-110  text-black"
            onClick={handleRightClick}
          >
            <FaRegArrowAltCircleRight size={30} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
