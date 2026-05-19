export function NavBar() {
    return (
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row justify-between items-center px-[60px] pt-[40px]">
            <img src="./nav.png" className="max-h-[100px] w-auto" />
            <div className="flex gap-[50px]">
                <a className="bg-brand-red text-brand-light font-bowlby py-[9px] px-[18.5px] rounded-[15px] cursor-pointer text-[25px]">Buy tickets</a>
                <img src="./menu-icon.svg" alt="" />
            </div>
        </div>
    )
}