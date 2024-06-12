import { CurrentTheme } from "@/app/utils/currentTheme"

const AnimationOnBtn=({isAnimationPaused}:{isAnimationPaused:boolean}): JSX.Element => {
    const theme= CurrentTheme({icon:true})
    
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path
          id="play"
          d="M5 3l14 9-14 9V3z"
          fill={theme}
          style={{ display: isAnimationPaused ? "block" : "none" }}
        ></path>
        <path
          id="pause"
          d="M4 4h4v16H4zM16 4h4v16h-4z"
          fill={theme}
          style={{ display: isAnimationPaused ? "none" : "block" }}
        ></path>
      </svg>
    )
}

export default AnimationOnBtn
