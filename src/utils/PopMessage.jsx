// eslint-disable-next-line react/prop-types
function PopMessage({ children }) {
  return (
    <div className=" text-slate-700 text-xl font-semibold px-3 py-4 rounded-md  transition-opacity duration-500 ease-in-out">
      {children}
    </div>
  );
}

export default PopMessage;
