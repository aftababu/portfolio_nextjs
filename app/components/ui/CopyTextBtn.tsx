import useAlert from "@/app/utils/useAlert";
import React, { useRef, useState, MouseEvent } from "react";
import Alert from "../Alert";

interface CopyTextBtnProps {
  text: string;
}

const CopyTextBtn: React.FC<CopyTextBtnProps> = ({ text }) => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [, setCopySuccess] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function copyToClipboard(e: MouseEvent<SVGSVGElement>) {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      // This is just personal preference.
      // I prefer to not show the whole text area selected.
      e.currentTarget.focus();
      showAlert({
        text: "copied",
        type: "success",
      });
      setTimeout(() => {
        hideAlert();
        setCopySuccess("");
      }, 3000);
    }
  }

  return (
    <>
      {alert.show && <Alert {...alert} />}
      <div className="bg-green-300 flex flex-row-reverse items-center rounded-md">
        {document.queryCommandSupported("copy") && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 256 256"
            onClick={copyToClipboard}
            className="mx-2"
          >
            <path
              fill="white"
              d="M216 36H88a4 4 0 0 0-4 4v44H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4v-44h44a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4Zm-52 176H44V92h120Zm48-48h-40V88a4 4 0 0 0-4-4H92V44h120Z"
            />
          </svg>
        )}
        <textarea
          rows={2}
          ref={textAreaRef}
          value={text}
          readOnly
          className="w-full p-2 border-none outline-none rounded-md !appearance-none text-slate-800 bg-gray-200 shadow-2xl"
        />
      </div>
    </>
  );
};

export default CopyTextBtn;
