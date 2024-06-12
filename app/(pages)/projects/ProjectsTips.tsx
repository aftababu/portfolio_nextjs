import React, { useEffect, useState } from "react";
import NextBtn, { CencelBtn } from "./TipsBtn";
import useAlert from "@/app/utils/useAlert";
import Alert from "@/app/components/Alert";
import Image from "next/image";
import fmini1 from '@/public/fmini1.svg'

const ProjectTips:React.FC = () => {
  const [showTips, setShowTips] = useState(true);
  const [currentTip, setCurrentTip] = useState(1);
  const { alert, showAlert, hideAlert } = useAlert();

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== 'undefined') {
      // Access localStorage
      const storedValue = localStorage.getItem('projectsTips');
      // Update state based on localStorage value
      setShowTips(storedValue ? false : true);
    }
  }, []);

  const handleStartProject = () => {
    if (typeof window !== 'undefined') {
      // Set localStorage item
      localStorage.setItem('projectsTips', JSON.stringify(false));
    }

    showAlert({
      text: 'Ready to go',
      type: 'success',
    });

    setShowTips(false);
    setTimeout(() => {
      hideAlert();
    }, 3000);
  };

  const handleCancel = () => {
    setShowTips(false);
  };

  const handleNext = () => {
    setCurrentTip((prevTip) => prevTip + 1);
  };
  return (
    <>
      {alert.show && (
        <div className="z-50">
          <Alert {...alert} />
        </div>
      )}
      {showTips && (
        <div className="bg-green-950/70 w-screen h-screen absolute inset-0 z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-green-100 p-4 rounded-md shadow-2xl ">
            {currentTip === 1 && (
              <>
                <p className="text-lg font-bold text-gray-800 flex justify-between items-center gap-3">
                  <b className="text-lg text-green-950 font-bold">Tips 1 : </b>{" "}
                  <span>Double-click to open folder </span>{" "}
                  <Image src={fmini1} alt="folder" width={24} height={24} />
                </p>
                <div className="flex items-center justify-end mt-4 text-sm">
                  <CencelBtn handleCancel={handleCancel} />
                  <NextBtn handleNext={handleNext} />
                </div>
              </>
            )}
            {currentTip === 2 && (
              <>
                <p className="text-lg font-bold text-gray-800">
                  <b className="text-lg text-green-950 font-bold">Tips 2 : </b>{" "}
                  Recommend to see the ⭐ project
                </p>
                <div className="flex justify-end mt-4">
                  <CencelBtn handleCancel={handleCancel} />
                  <NextBtn handleNext={handleStartProject} />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTips;
