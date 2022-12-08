import { useContext, useState } from "react";
import { ITodo, TodoContextType } from "../@types/todo";
import { TodoContext } from "../context/todoContext";

export default function AddTodo(){
  const { saveTodo } = useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = useState<ITodo | {}>();
  const handleForm = (e: any): void => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSaveTodo = (e: any, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };
  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={handleForm}
            id="title"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};
