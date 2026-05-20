import { NavLink } from "react-router";

export function NavBar({ blue = false }) {
    return (
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row justify-between items-center px-[60px] pt-[40px]">
            <NavLink to={"/"}><img src={blue ? "/blaasol/nav-blue.png" : "/blaasol/nav.png"} className="max-h-[100px] w-auto" /></NavLink>
            <div className="flex gap-[50px]">
                {!blue && <NavLink to={"/tickets"} className="bg-brand-red text-brand-light font-bowlby py-[9px] px-[18.5px] rounded-[15px] cursor-pointer text-base">Buy tickets</NavLink> }
                <img src="./menu-icon.svg" alt="" className={blue ? "invert" : ""} />
            </div>
        </div>
    )
}