import React, { useState, useEffect } from "react";
import IconButtonComponent from "./IconButtonComponent";
import Grid from "@mui/material/Grid2";
import { useTodo } from "../Contexts/TodoContext";
import TogglebtnComponent from "./TogglebtnComponent";

export default function TodoComponent() {
  const { tasks, dispatch } = useTodo(); // Make sure useTodo is called as a function
  const [filteredTasks, setFilteredTasks] = useState([]); // Set default state as empty array

  useEffect(() => {
    dispatch({ type: "get" });
  }, [dispatch]);

  useEffect(() => {
    // Update filteredTasks when tasks change
    setFilteredTasks(tasks || []); // Ensure tasks is always an array
  }, [tasks]);

  const TaskList = () => (
    <>
      {filteredTasks.map((task) => (
        <Grid
          container
          spacing={2}
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
            backgroundColor: "rgb(179 186 193 / 63%)",
          }}
          className="boxTodo"
        >
          <Grid size={8}>
            <div
              className="Text"
              style={{ textAlign: "right", padding: "5px" }}
            >
              <h2
                style={{
                  margin: "5px",
                  fontSize: "18px",
                  textDecoration: task.isComplete ? "none" : "line-through",
                }}
              >
                {task.title}
              </h2>
              <p style={{ fontSize: "15px" }}>{task.paragraph}</p>
            </div>
          </Grid>
          <Grid size={4}>
            <div className="Icon">
              <IconButtonComponent Task={task} />
            </div>
          </Grid>
        </Grid>
      ))}
    </>
  );

  return (
    <div
      className="TodoParent"
      style={{
        backgroundColor: "#007affa1",
        marginTop: "10px",
        padding: "10px",
      }}
    >
      <TogglebtnComponent setFilteredTasks={setFilteredTasks} />
      <TaskList />
    </div>
  );
}
