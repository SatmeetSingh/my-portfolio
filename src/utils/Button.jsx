/* eslint-disable react/prop-types */

function Button({ children }) {
  return (
    <button className="text-white drop-shadow-2xl border-none py-3 px-6 rounded-lg text-[1.6rem]   flex flex-row gap-4 justify-center items-center cursor-pointer   shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max hover:bg-[#40A2E3] bg-[#FF8911]  btn1">
      {children}
    </button>
  );
}

export function SmallButton({ children }) {
  return (
    <button className="text-white drop-shadow-2xl border-none py-2 px-4 rounded-lg text-[1rem] max-lg:text-[0.8rem] flex flex-row gap-3 justify-center items-center cursor-pointer shadow-xl hover:scale-100 hover:-translate-y-1 hover:drop-shadow-xl transition-all duration-200 w-max hover:bg-[#40A2E3] bg-[#FF8911]  btn1">
      {children}
    </button>
  );
}

export function SmallBox({ children }) {
  return (
    <button className="text-white drop-shadow-2xl border-none py-2 px-4 rounded-lg lg:text-[1rem] max-lg:text-[0.8rem] flex flex-row justify-center items-center cursor-pointer shadow-xl hover:scale-100 hover:drop-shadow-xl transition-all duration-200 w-max hover:bg-[#40A2E3] bg-[#FF8911]">
      {children}
    </button>
  );
}

export default Button;
