import { createContext, useState } from "react";
import { ITodo, TodoContextType } from "../@types/todo";

interface Props {
    children: React.ReactNode;
  }
export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider:React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "post1",
      description: "This is my first post",
      status: false,
    },
    {
      id: 2,
      title: "post1",
      description: "This is my second post",
      status: false,
    },
  ]);

  const saveTodo = (todo: ITodo) => {
    const newTodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };
  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider

