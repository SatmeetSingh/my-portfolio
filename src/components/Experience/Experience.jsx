import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Experience card component
const ExperienceCard = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Small Card (Default State) */}
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg cursor-pointer w-full h-48 flex flex-col justify-center items-center"
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-2xl font-semibold">{experience.title}</h3>
        <p className="text-lg">{experience.company}</p>
        <p className="text-md">{experience.year}</p>
      </motion.div>

      {/* Full-Screen Modal (Appears on Hover) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white text-blue-600 p-8 rounded-xl shadow-lg max-w-2xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
              <h3 className="text-3xl font-bold">{experience.title}</h3>
              <p className="text-lg mt-2">
                {experience.company} ({experience.year})
              </p>
              <p className="mt-4">{experience.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Technologies:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {experience.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

// Sample Experience Data
const experiences = [
  {
    id: 1,
    title: 'Full-Stack Developer',
    company: 'Alpha Net Solutions',
    year: 'Dec 2023 - Present',
    description:
      'Developed and maintained web applications, APIs, and UI components while optimizing performance and scalability. Migrated backend microservices from Express.js to NestJS and transitioned ORM from TypeORM to Sequelize. Improved authentication, security, and database efficiency while collaborating with cross-functional teams.',
    technologies: [
      'React.js',
      'NestJS',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'PostgreSQL',
      'MongoDB',
      'Sequelize',
      'TypeORM',
      'Express.js',
    ],
  },
  {
    id: 2,
    title: 'Intern',
    company: 'Alpha Net Solutions',
    year: 'Sep 2023 - Dec 2023',
    description:
      'Assisted in building a full-stack web app and gained hands-on experience in JavaScript.',
    technologies: ['JavaScript', 'React Js', 'HTML', 'CSS'],
  },
];

// Main Experience Component
export const Experience = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-10 items-center"
  >
    {/* <h2 className="text-3xl font-bold">Experience</h2> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-5 lg:w-[80%]">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} />
      ))}
    </div>
  </motion.div>
);
