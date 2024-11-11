import { createContext, useContext } from "react";
import { useState } from "react";

let DeleteAndEditDialogContext = createContext({});

export function DialogProvider({ children }) {
  const [dialogDeleteOpen, setdialogDeleteOpen] = useState(false);
  const [dialogEditOpen, setdialogEditOpen] = useState(false);
  const [selectTask, setselectTask] = useState([]);

  return (
    <DeleteAndEditDialogContext.Provider
      value={{
        dialogDeleteOpen,
        setdialogDeleteOpen,
        dialogEditOpen,
        setdialogEditOpen,
        selectTask,
        setselectTask,
      }}
    >
      {children}
    </DeleteAndEditDialogContext.Provider>
  );
}

export const useDialog = () => {
  return useContext(DeleteAndEditDialogContext);
};
