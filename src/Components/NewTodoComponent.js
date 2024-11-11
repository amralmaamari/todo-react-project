import "../style/style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {   useState } from "react";
import {useTodo} from "../Contexts/TodoContext";
import { useTost } from "../Contexts/SnackbarsContext";

export default function NewTodoComponent() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { setOpenSnack, setSnackMessage } = useTost();
  const { dispatch } = useTodo(); // Get dispatch from context

  function handleAddNewTask() {
    if (newTaskTitle) {
      dispatch({ type: "added", payload: { newTitle: newTaskTitle } });
      setNewTaskTitle("");
      setSnackMessage("تم الاضافة بنجاح");
      setOpenSnack(true);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <TextField
        label="إضافة"
        variant="filled"
        style={{ flex: "1", direction: "rtl" }}
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <Button
        variant="contained"
        style={{ padding: "10px 30px" }}
        onClick={handleAddNewTask}
        disabled={newTaskTitle.length === 0}
      >
        إضافة
      </Button>
    </div>
  );
}
