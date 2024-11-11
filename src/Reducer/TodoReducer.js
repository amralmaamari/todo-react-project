import { v4 as uuidv4 } from "uuid";

export default function TodoReducer(currentTodos, action) {
  switch (action.type) {
    case "added": {
      const newTodo = {
        id: uuidv4(),
        title: action.payload.newTitle,
        paragraph: "New task description", // Update as needed
        isCompleted: false,
      };

      const updatedTodos = [...currentTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }
    case "update": {
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          // Toggle isCompleted status
          return {
            ...t,
            title: action.payload.title,
            paragraph: action.payload.paragraph,
          };
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }
    case "deleted": {
      const updatedTodos = currentTodos.filter((e) => {
        return e.id !== action.payload.id;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }

    case "toggledCompleted": {
      //TaskID should be passed as a parameter
      const updatedTodos = currentTodos.map((t) => {
        if (t.id === action.payload.id) {
          const updatedTask = { ...t, isCompleted: !t.isCompleted };
          return updatedTask;
        }
        return t;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }
    case "get": {
      const savedTasks = localStorage.getItem("todos");
      console.log(savedTasks);
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
    default: {
      throw Error("Unknown Action " + action.type);
    }
  }
}
