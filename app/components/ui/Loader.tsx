import  { FC } from "react";

const Loader
:FC = () => {
  return (
    <div className="flex justify-center items-centers absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-green-300 h-10 w-10 rounded-full animate-ping text-[5px]"></div>
    </div>
  );
};

export default Loader;
