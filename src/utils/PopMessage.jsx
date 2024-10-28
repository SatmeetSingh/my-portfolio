function PopMessage({ children, duration }) {
  return (
    <div className="absolute right-4 top-4 z-50 bg-blue-700  text-slate-200 text-xl font-semibold px-3 py-4 rounded-md  transition-opacity duration-500 ease-in-out opacity-100 shadow-[10px_25px_50px_-5px_rgba(0,0,0,0.5)]">
      {children}
    </div>
  );
}

export default PopMessage;
