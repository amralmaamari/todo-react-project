import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTost } from "../Contexts/SnackbarsContext";
import { useDialog } from "../Contexts/DeleteAndEditDialogContext";
import {useTodo} from "../Contexts/TodoContext"; // Assuming tasks come from here

export default function OutlinedIconButtons({ Task }) {
  const { setOpenSnack, setSnackMessage } = useTost();
  const { setdialogDeleteOpen, setdialogEditOpen, setselectTask } = useDialog();
  const {tasks, dispatch} = useTodo();
  
  // Update isComplete state
  const task = tasks.find((t) => t.id === Task.id);
  const isComplete = task ? task.isCompleted : false;
  
  function handleDeleteTask() {
    

    setselectTask(task);
    setdialogDeleteOpen(true);
  }

  function handleCompleteTask() {
    //TaskID should be passed as a parameter
    dispatch({
      type: "toggledCompleted",
      payload: {
        id: Task.id,
      },
    });

    setSnackMessage("تم اكمال المهمة");

    setOpenSnack(true);
  }

  let handleOpenEditTask = () => {
    // setdialogEditOpen(true);
    setdialogEditOpen(true);
    setselectTask(Task);
  };

  // Update the tasks state


  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        flexWrap: "wrap",
      }}
    >
      <IconButton
        style={{
          backgroundColor: "rgb(255 255 255 / 91%)",
          border: "2px solid red",
          color: "red",
        }}
        onClick={handleDeleteTask}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        style={{
          backgroundColor: "rgb(255 255 255 / 91%)",
          border: "2px solid blue",
          color: "blue",
        }}
        onClick={handleOpenEditTask}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        style={{
          backgroundColor: isComplete ? "green" : "white",
          border: "2px solid green",
          color: isComplete === true ? "white" : "green",
        }}
        onClick={handleCompleteTask}
      >
        <CheckCircleIcon />
      </IconButton>
    </div>
  );
}
