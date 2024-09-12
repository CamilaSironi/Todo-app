import useTodosContext from "../lib/hooks";

type DeleteButtonProps = {
  id:string;
}

function DeleteButton({id}: DeleteButtonProps) {

  const {
    handleDeleteTodo
  } = useTodosContext();

  return (
    <button
      onClick={(e) => {    
        e.stopPropagation();
        handleDeleteTodo(id);
      }}
      className={`h-7 w-7 bg-[#962419cc] hover:bg-[#9623199f]  text-white font-bold rounded-[5px] cursor-pointer`}
    >
      X  
    </button>
  )
}

export default DeleteButton
