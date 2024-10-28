import styles from './skills.module.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiPostman,
  SiNestjs,
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';

let skills = [
  {
    icon: <FaHtml5 size={60} color="red" />,
    name: 'HTML',
  },
  {
    icon: <FaCss3Alt size={60} color="blue" />,
    name: 'CSS',
  },
  {
    icon: <IoLogoJavascript size={60} color="orange" />,
    name: 'Java Script',
  },
  {
    icon: <FaReact size={60} color="blue" />,
    name: 'React',
  },
  {
    icon: <SiTailwindcss size={60} color="violet" />,
    name: 'Tailwind',
  },
  {
    icon: <FaNodeJs size={60} color="brown" />,
    name: 'NodeJs',
  },
  {
    icon: <SiExpress size={60} color="black" />,
    name: 'Express',
  },
  {
    icon: <SiNestjs size={60} color="#E0234E" />,
    name: 'Nestjs',
  },
  {
    icon: <DiMsqlServer size={60} color="darkblue" />,
    name: 'SQL',
  },
  {
    icon: <SiMongodb size={60} color="green" />,
    name: 'MongoDb',
  },
  {
    icon: <SiDotnet size={60} color="#512BD4" />,
    name: '.Net',
  },
  {
    icon: <SiPostman size={60} color="#FF6B00" />,
    name: 'Postman',
  },
];

function Skills() {
  return (
    <div className={styles.skill}>
      <div className={styles.intro}>
        <p>
          <span className="text-[orange]">&lt;</span>Skills
          <span className="text-[orange]">/&gt;</span>
        </p>
        <h3 className="mb-16">My TechStack and Skills</h3>
      </div>
      <div className={styles.boxes}>
        <div className="h-auto rounded-2xl px-8 py-16 pt-32 grid grid-cols-4 gap-10 relative z-10 max-lg:w-full  max-lg:pt-32 bg-[#f6e7e7] dark-shadow border-2 shadow-[10px_25px_50px_-5px_rgba(0,0,0,0.5)]  min-[1921px]:grid-cols-4   min-[2250px]:grid-cols-5 max-lg:p-8 max-lg:gap-5">
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl ">
            <p className="font-black text-4xl">
              <span className="text-[orange]">&lt;</span>WebDevelopment
              <span className="text-[orange]">/&gt;</span>
            </p>
          </div>
          {skills.map((item) => (
            <div
              className={`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl px-4 py-8 border-solid border-[1px]  text-center max-lg:items-center bg-[#f1e5e5]  max-lg:p-3 max-lg:gap-2  transition-all duration-200 max-lg:border-none max-h-30 hover:scale-90 relative   ${styles.items}`}
              style={{ borderColor: 'rgb(21, 114, 182)' }}
              key={item.name}
            >
              {item.icon}
              <h3 className="max-lg:text-[1.6rem] min-[1024px]:hidden">
                {item.name}
              </h3>
              <span className={styles.tooltiptext}>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="text-5xl lg:w-[40%] font-bold italic w-[80%]">
          “There are three responses to a piece of software – yes, no, and WOW!
          WOW is the one to aim for.”
        </div>
      </div>
    </div>
  );
}

export default Skills;
