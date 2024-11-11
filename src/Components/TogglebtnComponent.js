import React, { useState, useMemo } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTodo } from "../Contexts/TodoContext";

export default function StatusToggleButtons({ setFilteredTasks }) {
  const [alignment, setAlignment] = useState("all");
  const { tasks } = useTodo(); // From context

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  useMemo(() => {
    console.log("from memo");

    if (alignment === "completed") {
      setFilteredTasks(tasks.filter((task) => task.isCompleted));
    } else if (alignment === "notCompleted") {
      setFilteredTasks(tasks.filter((task) => !task.isCompleted));
    } else {
      setFilteredTasks(tasks); // Show all tasks
    }
  }, [alignment, tasks, setFilteredTasks]);

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="status"
      style={{ direction: "ltr" }}
    >
      <ToggleButton
        value="notCompleted"
        aria-label="not-completed"
        sx={{
          backgroundColor:
            alignment === "notCompleted" ? "#fce4ec" : "transparent",
          color: alignment === "notCompleted" ? "#d32f2f" : "black",
        }}
      >
        غير منجز
      </ToggleButton>

      <ToggleButton
        value="completed"
        aria-label="completed"
        sx={{
          backgroundColor:
            alignment === "completed" ? "#e0e0e0" : "transparent",
          color: alignment === "completed" ? "#4caf50" : "black",
        }}
      >
        منجز
      </ToggleButton>

      <ToggleButton
        value="all"
        aria-label="all"
        sx={{
          backgroundColor: alignment === "all" ? "#e0e0e0" : "transparent",
          color: alignment === "all" ? "#1976d2" : "black",
        }}
      >
        الكل
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
