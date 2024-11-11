import { useContext, createContext, useState } from "react";

const SnackbarsContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  return (
    <SnackbarsContext.Provider
      value={{ openSnack, setOpenSnack, snackMessage, setSnackMessage }}
    >
      {children}
    </SnackbarsContext.Provider> // Use Provider here
  );
};

export const useTost = () => {
  return useContext(SnackbarsContext);
};
