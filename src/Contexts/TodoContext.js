import { createContext, useContext } from "react";
import { useReducer } from "react";
import TodoReducer from "../Reducer/TodoReducer";

const TodoContext = createContext(); // Default to null to avoid undefined errors

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children }) {
  const [tasks, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
