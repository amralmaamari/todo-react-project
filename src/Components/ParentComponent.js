import "../style/style.css";

import TodoComponent from "./TodoComponent";
import SnackbarComponent from "./SnackbarComponent";
import NewTodoComponent from "./NewTodoComponent";
import Divider from "@mui/material/Divider";
import DeleteConfirmationComponent from "./DeleteConfirmationComponent";
import EditTodoComponent from "./EditTodoComponent";
import { DialogProvider } from "../Contexts/DeleteAndEditDialogContext";

import { ToastProvider } from "../Contexts/SnackbarsContext";

import {TodoProvider} from "../Contexts/TodoContext";

export default function ParentComponent() {

  return (
    <TodoProvider>
      <div
        style={{
          backgroundColor: "#c7c7c770",
          width: "500px",
          maxHeight: "80vh",
          overflowY: "scroll",
        }}
      >
        <h2>مهامي</h2>
        <Divider style={{ margin: "10px 0" }}>Task</Divider>

        <ToastProvider>
          <DialogProvider>
            <TodoComponent />

            <NewTodoComponent />

            <DeleteConfirmationComponent />

            <EditTodoComponent />
          </DialogProvider>
          <SnackbarComponent />
        </ToastProvider>
      </div>
    </TodoProvider>
  );
}
