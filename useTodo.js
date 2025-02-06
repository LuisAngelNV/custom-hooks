import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
];

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    // Función dispatch para enviar la acción al reducer
    dispatch(action);
  };
  const handleDeleteTodo = (Id) => {
    dispatch({
      type: "[TODO] remove todo",
      payload: Id,
    });
  };

  const handleontoggleTodo = (id) => {
    dispatch({
      type: "[TODO] toggle todo",
      payload: id,
    });
  };

  const TodosCount = () => {
    return todos.length;
  };

const PendingTodosCount = () => {
    return todos.filter((todo) => !todo.done).length;
}

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleontoggleTodo,
    TodosCount,
    PendingTodosCount
  };
};
