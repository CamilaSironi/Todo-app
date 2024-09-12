import useTodosContext from "../lib/hooks";

function Counter() {

  const {
    totalTodos,
    completedTodos
  } =   useTodosContext();

  return (
    <p>
        <b>{completedTodos}</b>/{totalTodos} todos completed
    </p>
  )
}

export default Counter
