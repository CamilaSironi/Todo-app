import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

function useTodosContext() {

    const context = useContext(TodosContext);

    if(!context){
      throw new Error("No provider added!");
    }

    return context;
}

export default useTodosContext