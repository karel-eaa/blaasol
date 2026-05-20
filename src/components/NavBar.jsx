import { useState } from "react";
import { NavLink } from "react-router";
import { assetUrl } from "../utils/assetUrl";

export function NavBar({ blue = false, buyTicketsButton = true }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-12 md:gap-0 md:flex-row justify-between items-center px-[60px] pt-[40px]">
                <NavLink to={"/"}><img src={assetUrl(blue ? "nav-blue.png" : "nav.png")} className="max-h-[100px] w-auto" /></NavLink>
                <div className="flex gap-[50px] items-center relative">
                    {buyTicketsButton && (
                        <NavLink to={"/tickets"} className="bg-brand-red text-brand-light font-bowlby py-[9px] px-[18.5px] cursor-pointer text-base">
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
                            <div className="absolute top-full right-0 mt-3 bg-brand-blue p-6 flex flex-col gap-3 shadow-lg min-w-[180px] z-50">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/artists", label: "Artists" },
                                    { to: "/tickets", label: "Tickets" },
                                    { to: "/experience", label: "Experience" },
                                    { to: "/gallery", label: "Gallery" },
                                    { to: "/good-acts", label: "Good Acts" },
                                    { to: "/volunteer", label: "Volunteer" },
                                    { to: "/sponsors", label: "Sponsors" },
                                    { to: "/shop", label: "Shop" },
                                    { to: "/contact", label: "Contact" },
                                ].map(({ to, label }) => (
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