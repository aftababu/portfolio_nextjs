"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import notFoundPng from "@/public/404.png";
const PageNotFound: React.FC<{ text: string }> = ({text='The page you are looking for does not exist.'}) => {
  const router = useRouter();

  return (
    <div className="pt-16 sm:pt-10 2xl:mt-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400/90 via-green-600 to-green-800/50">
      <button
        className="btn px-3 py-2 mb-4 sm:mb-2"
        onClick={() => router.back()}
      >
        Go Back
      </button>
      <Image
        src={notFoundPng}
        alt="404 ERROR"
        width={800}
        height={400}
        className="w-full sm:w-1/2 lg:w-1/3 2xl:w-fit"
      />
      <p className="text-white text-sm sm:text-lg text-center">
        {text}
      </p>
    </div>
  );
};

export default PageNotFound;
