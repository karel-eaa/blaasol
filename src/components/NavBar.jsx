import { useState } from "react";
import { NavLink } from "react-router";
import { assetUrl } from "../utils/assetUrl";
import { navigationLinks } from "../data/navigationLinks";

export function NavBar({ blue = false, buyTicketsButton = true }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-12 md:gap-0 md:flex-row justify-between items-center px-[60px] pt-[40px]">
                <NavLink to={"/"}><img src={assetUrl(blue ? "nav-blue.png" : "nav.png")} className="max-h-[100px] w-auto" /></NavLink>
                <div className="flex gap-[50px] items-center relative">
                    {buyTicketsButton && (
                        <NavLink to={"/tickets"} className="bg-brand-red text-brand-light font-bowlby py-[9px] px-[18.5px] cursor-pointer text-base rounded-[15px]">
                            Buy tickets
                        </NavLink>
                    )}

                    {/* Menu icon + dropdown wrapper */}
                    <div className="relative">
                        <img
                            src={assetUrl("menu-icon.svg")}
                            alt="Open menu"
                            className={`cursor-pointer select-none ${blue ? "invert" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        />

                        {/* Dropdown */}
                        {menuOpen && (
                            <div className="absolute top-full right-0 z-50 mt-3 flex min-w-[180px] flex-col gap-3 bg-brand-blue pb-16 pl-16 pr-6 pt-6 shadow-lg">
                                {navigationLinks.map(({ to, label }) => (
                                    <NavLink
                                        key={to}
                                        to={to}
                                        onClick={() => setMenuOpen(false)}
                                        className="font-bowlby text-brand-light text-lg hover:text-brand-red transition-colors"
                                    >
                                        {label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Click outside to close */}
            {menuOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
            )}
        </>
    );
}
