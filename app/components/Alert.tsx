interface AlertProps {
  text: string;
  type: "danger" | "success";
  show ?: boolean;
}

const Alert: React.FC<AlertProps> = ({ text, type, show = true }) => {
  return (
    <div className="absolute top-3 left-0 right-0 flex justify-center z-50">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-[#22BB33]"
        } px-3 py-2 text-indigo-100 leading-none lg:rounded-full rounded-md flex lg:inline-flex items-center`}
      >
        {show && (
          <p
            className={`${
              type === "danger" ? "bg-red-500" : "bg-green-500/50"
            } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
          >
            {type === "danger" ? "Error" : "Success"}
          </p>
        )}
        <p className="text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
