interface Props {
  url: string;
  className?: string;
  btn?: boolean;
}
const VisitProjectBtn = ({ url, btn, className }:Props):JSX.Element => {
  return (
    <a
      href={url}
      target="_blank"
      className={`${className && className} hover:scale-105 transition-all  ${
        btn && "btn"
      } text-sm xs:text-lg px-4 py-1 font-medium flex items-center gap-1`}
    >
      Visit{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
        />
      </svg>
    </a>
  );
};

export default VisitProjectBtn;
