import { useKindeAuth } from "@kinde-oss/kinde-auth-react"
import AddTodoForm from "./AddTodoForm"
import Button from "./Button"

function Sidebar() {

  const {
    login, 
    register,
    isAuthenticated,
    isLoading,
    user,
    logout
  } = useKindeAuth();

  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.1] px-[25px] pt-[18px] pb-[28px]">
        <AddTodoForm/>

        <div className="mt-auto space-y-2">

          {
            isLoading ? null : isAuthenticated ? (
              <>
                <p className="text-sm">Logged in as {user?.email}</p>
                <Button buttonType="secondary" onClick={logout}>Log Out</Button>
              </>
            ) : (
              <>
                <Button buttonType="secondary" onClick={login}>Log In</Button>
                <Button buttonType="secondary" onClick={register}>Register</Button>
              </>
          )}

        </div>
    </section>
  )
}

export default Sidebar
