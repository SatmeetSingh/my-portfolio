import { SmallBox, SmallButton } from '../../utils/Button';
import styles from './Project.module.css';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { FaExternalLinkAlt } from 'react-icons/fa';

let projects = [
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
    page: '',
  },
  {
    Title: 'FastPizza App',
    Skills: ['Javascript', 'Css', 'Html', 'Tailwind', 'ReactJs'],
    Description:
      'Fast React Pizza Co. is a web application for online pizza ordering, built with React. It features an intuitive interface that allows users to customize their pizza, view the menu, and manage their shopping cart seamlessly. The application is designed responsively, providing a smooth user experience across different devices.',
    link: 'https://github.com/SatmeetSingh/Fast-pizza-App',
    page: 'https://vasu-fast-react-pizza-co.netlify.app/',
  },
];

function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.intro}>
        <p>
          <span className="text-[Orange]">&lt;</span>Projects
          <span className="text-[Orange]">/&gt;</span>
        </p>
        <h3 className="mb-16">My Project Gallery</h3>
      </div>
      <div className={styles.projectBoxes}>
        <div className="h-auto rounded-2xl px-8 py-8 lg:flex gap-6 z-10 dark-shadow border-2 shadow-[10px_25px_50px_-5px_rgba(0,0,0,0.5)] bg-[#f6e7e7]  max-lg:grid max-lg:grid-cols-2 max-md:flex  max-md:flex-col ">
          {projects.map((project) => (
            <div
              key={project.Title}
              className={`cursor-pointer border-solid border-[1px] bg-[#f1e5e5] border-blue-600 flex flex-col gap-4 rounded-2xl px-4 py-4  ${styles.items}`}
            >
              <div className="font-bold text-2xl text-center">
                <h5>{project.Title}</h5>
              </div>
              {/* <h3>{project.Skills}</h3> */}
              <div className={`flex flex-wrap gap-2`}>
                {project.Skills.map((skill) => (
                  <div className="flex items-center justify-center" key={skill}>
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
        </div>
      </div>
    </div>
  );
}

export default Project;
