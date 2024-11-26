import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../components/navBar/navSlice';

function DarkMode() {
  const dispatch = useDispatch();
  const Dark = useSelector((state) => state.navbar.darkMode);

  const handleEvent = () => {
    dispatch(setMode(!Dark));
  };
  return (
    <button
      className={`border-2 rounded-full p-1 hover:scale-125 transition-all duration-200    ${
        Dark ? 'text-black ' : 'text-white'
      }`}
      onClick={() => handleEvent()}
    >
      {Dark ? <CiLight size={25} /> : <MdDarkMode size={25} />}
    </button>
  );
}

export default DarkMode;
