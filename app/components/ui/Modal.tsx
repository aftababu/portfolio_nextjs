// components/Modal.tsx

import { createContext, cloneElement, useState, useContext, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  openModal: string;
  close: () => void;
  open: (name: string) => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: "",
  close: () => {},
  open: () => {},
});

const StyledModal =
  "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg p-8 transition-all duration-500";
const Overlay =
  "fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-filter blur-4 z-50 transition-all duration-500";
const Button =
  "bg-transparent border-none p-1.5 rounded-sm transform translate-x-3 -translate-y-2 transition-all duration-200 absolute top-3 right-6 hover:bg-gray-200";

interface ModalProps {
  children: React.ReactNode;
}

interface ModalComponent extends React.FC<ModalProps> {
  Open: React.FC<OpenProps>;
  Window: React.FC<WindowProps>;
}

const Modal: ModalComponent = ({ children }) => {
  const [openModal, setOpenModal] = useState<string>("");

  const close = () => setOpenModal("");
  const open = (modalName: string) => setOpenModal(modalName);

  return (
    <ModalContext.Provider value={{ openModal, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

interface OpenProps {
  children: React.ReactElement;
  opens: string;
  onClick?: () => void;
}

const Open: React.FC<OpenProps> = ({ children, opens, onClick }) => {
  const { open } = useContext(ModalContext);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    open(opens);
    if (onClick) {
      onClick();
    }
  };

  return cloneElement(children, { onClick: handleClick });
};

interface WindowProps {
  children: React.ReactElement;
  name: string;
}

const Window: React.FC<WindowProps> = ({ children, name }) => {
  const { openModal, close } = useContext(ModalContext);

  const ref = useRef<HTMLDivElement>(null); // Move useRef call to the top

  if (name !== openModal) return null;

  return createPortal(
    <div className={Overlay} ref={ref}> {/* Use ref unconditionally */}
      <div className={StyledModal}>
        <button className={Button} onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
            />
          </svg>
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
};


Modal.Open = Open;
Modal.Window = Window;

export default Modal;
