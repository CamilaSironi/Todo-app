import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProviderProps = {
    children: React.ReactNode
};

type TTodosContext = {
    todos: Todo[];
    totalTodos: number;
    completedTodos: number;
    handleAddTodo: (todoText: string) => void;
    handleDeleteTodo: (id: string) => void;
    handleToggleTodo: (id: string) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialData = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos){
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
}

function TodosContextProvider({children}: TodosContextProviderProps) {
    
    const {isAuthenticated} = useKindeAuth();

    //state
    const [todos, setTodos] = useState<Todo[]>(getInitialData);

    //derived state
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  
    //event handlers
    const handleAddTodo = (todoText: string) => {
      if(todos.length >= 3 && !isAuthenticated) {
          alert("Log in to add more todos")
          return;
      } else if(todoText){
          setTodos(prev => [
          ...prev,
          {
            id:prev.length+todoText,
            text:todoText,
            isCompleted:false
          }
          ])
      } else {
          alert("Todo is empty")
          return;
      }
    };
    const handleDeleteTodo = (id: string) => {
      setTodos(prev => prev.filter((todo) => todo.id !== id));
    };
    const handleToggleTodo = (id: string) => {
      setTodos(
        todos.map((t) => {
          if(t.id === id){
            return {...t, isCompleted: !t.isCompleted};
          }
    
          return t;
        })
      );
    };

    //side effects
    //writing data
    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodosContext.Provider
            value={{
                todos,
                totalTodos,
                completedTodos,
                handleAddTodo,
                handleDeleteTodo,
                handleToggleTodo
            }}
        >
            {children}
        </TodosContext.Provider>
    );
}

export default TodosContextProvider
