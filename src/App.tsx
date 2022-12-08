import { useState } from "react";
import TodoProvider from "./context/todoContext";
import Todos from "./containers/Todos";
import AddTodo from "./components/AddTodo";
import ThemeProvider from "./context/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <main className="App">
          <h1>My Todos</h1>
          <AddTodo />
          <Todos />
        </main>
      </TodoProvider>
    </ThemeProvider>
  );
}
