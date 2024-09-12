import Counter from "./Counter";
import Logo from "./Logo";

function Header() {

    return(
        <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.1]">
            <Logo/>
            <Counter/>
        </header>
    );
}

export default Header;