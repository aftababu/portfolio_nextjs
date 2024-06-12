import { CurrentTheme } from "@/app/utils/currentTheme";
import React, { FC } from "react";

const Express:FC = () => {
    const theme = CurrentTheme({icon:false})
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49 38.2998C47.254 38.7303 46.174 38.3187 45.205 36.908L38.314 27.6642L37.318 26.3844L29.2705 36.9385C28.351 38.2082 27.3865 38.7608 25.6705 38.3114L35.9755 24.8995L26.3815 12.7849C28.0315 12.4737 29.1715 12.6322 30.184 14.0647L37.3315 23.4234L44.5315 14.1156C45.454 12.846 46.4455 12.3632 48.1015 12.8315L44.3815 17.6133L39.3415 23.976C38.7415 24.7032 38.824 25.2006 39.376 25.903L49 38.2998ZM1.012 24.6756L1.855 20.6558C4.15 12.7006 13.555 9.39485 20.041 14.3105C23.8315 17.2017 24.7735 21.2913 24.586 25.8725H3.22C2.899 34.1186 9.0205 39.0953 16.825 36.5561C19.5625 35.6645 21.175 33.5863 21.982 30.9859C22.3915 29.6829 23.0695 29.4792 24.3325 29.8516C23.6875 33.1035 22.2325 35.8202 19.1575 37.5203C14.563 40.0654 8.005 39.2422 4.555 35.7053C2.5 33.6532 1.651 31.0528 1.27 28.2721C1.21 27.8126 1.09 27.3748 1 26.9342C1.008 26.1818 1.012 25.4294 1.012 24.677V24.6756ZM3.259 24.1229H22.567C22.441 18.1601 18.6115 13.9251 13.378 13.8888C7.633 13.8451 3.508 17.9798 3.259 24.1229Z"
        fill={`${theme==='dark'?'white':'black'}`}
      />
    </svg>
  );
};

export default Express;