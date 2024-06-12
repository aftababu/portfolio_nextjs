import { useState } from "react";

interface AlertState {
  show: boolean;
  text: string;
  type: "danger" | "success"; // Adjust if there are more types
}

interface UseAlertHook {
  alert: AlertState;
  showAlert: (options: { text: string; type?: "danger" | "success" }) => void;
  hideAlert: () => void;
}

const useAlert = (): UseAlertHook => {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: { text: string; type?: "danger" | "success" }) => {
    setAlert({
      show: true,
      text,
      type,
    });
  };

  const hideAlert = () => {
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });
  };

  return {
    alert,
    showAlert,
    hideAlert,
  };
};

export default useAlert;
