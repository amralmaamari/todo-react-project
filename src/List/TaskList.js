import {  useState } from "react";

// Return the state management functions
function TaskList() {
  const [tasks, setTasks] = useState();

  return { tasks, setTasks };
}

export default TaskList;
