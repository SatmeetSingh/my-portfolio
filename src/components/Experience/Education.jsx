/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Education card component
const EducationCard = ({ education }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on ESC key press
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
      {/* Small Card (Default View) */}
      <motion.div
        className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-xl shadow-lg cursor-pointer w-full h-40 flex flex-col justify-center items-center"
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-2xl font-semibold">{education.degree}</h3>
        <p className="text-lg">{education.school}</p>
        <p className="text-md">{education.year}</p>
      </motion.div>

      {/* Full-Screen Modal */}
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
              className="bg-white text-green-600 p-8 rounded-xl shadow-lg max-w-2xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
              <h3 className="text-3xl font-bold">{education.degree}</h3>
              <p className="text-lg mt-2">
                {education.school} ({education.year})
              </p>
              <p className="mt-4">{education.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold">Key Courses:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {education.courses.map((course, index) => (
                    <li
                      key={index}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      {course}
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

EducationCard.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      degree: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      courses: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

// Education Data
const education = [
  {
    id: 1,
    degree: 'B.Tech in Electronics and Communication Engineering',
    school: 'NIT Kurukshetra',
    year: '2018 - 2022',
    description:
      'Gained expertise in core computer science and electronics subjects, developed projects.',
    courses: [
      'Data Structures',
      'Algorithms',
      'Databases',
      'Operating Systems',
    ],
  },
];

// Main Education Component
export const Education = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-10 items-center"
  >
    {/* <h2 className="text-3xl font-bold">Education</h2> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-5 lg:w-[80%]">
      {education.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </div>
  </motion.div>
);
