import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const tabs = [
  { name: 'Experience', to: '/' },
  { name: 'Education', to: 'education' },
];

const ExperienceEducation = () => {
  const Dark = useSelector((state) => state.navbar.darkMode);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <div className="text-start mb-6 flex flex-col justify-center">
        <p className="font-bold text-3xl">
          <span className="text-orange-500">&lt;</span>
          <span
            className={`text-3xl font-semibold ${
              Dark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Experience & Education
          </span>
          <span className="text-orange-500">/&gt;</span>
        </p>
        <h3 className="text-lg font-medium text-gray-500 ml-6">
          Professional & Academic Journey
        </h3>
      </div>

      {/* Tabs Navigation */}
      <nav
        className={`flex justify-center md:justify-start space-x-4 p-2 rounded-2xl shadow-lg transition-all duration-300 ${
          Dark ? 'bg-gray-300' : 'bg-gray-900'
        }`}
      >
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `relative px-5 py-2 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                isActive
                  ? Dark
                    ? 'text-gray-900 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'
                    : 'text-gray-100 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'
                  : Dark
                  ? 'text-gray-800 hover:text-gray-900 '
                  : 'text-gray-200 hover:text-gray-200 '
              } hover:scale-105`
            }
          >
            {({ isActive }) => (
              <>
                {tab.name}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl z-[-1]"
                    layoutId="underline"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default ExperienceEducation;
