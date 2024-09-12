type ButtonProps = {
  onClick?: () => Promise<void>;
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
}

function Button({onClick, buttonType, children}: ButtonProps ) {

  return (
    <button 
      onClick={onClick}
      className={`h-[45px] bg-[#962419cc] hover:bg-[#9623199f] w-full text-white rounded-[5px] cursor-pointer ${buttonType === 'secondary' ? 'opacity-[85%]' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
