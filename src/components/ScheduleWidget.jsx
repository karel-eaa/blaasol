import { assetUrl } from "../utils/assetUrl";
import { NavLink } from "react-router";

export function ScheduleWidget() {
    return (
        <section className="px-4 md:px-[60px] py-10 w-full">
            <div
                style={{ backgroundImage: `url("${assetUrl("Schedule card background.png")}")` }}
                className="relative w-full max-w-[1000px] h-[250px] mx-auto rounded-[15px] overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-cover bg-center shadow-lg"
            >
                <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="font-bowlby text-lg uppercase tracking-wide text-brand-dark">MAKE YOUR OWN SCHEDULE</h1>
                    <p className="mt-2 max-w-[500px] font-poppins text-sm font-medium text-brand-dark">
                        Add the artists you want to see and share it with your friends
                    </p>
                    <NavLink to="/schedule" className="mt-5 rounded-[15px] bg-brand-red px-8 py-2.5 font-bowlby text-base text-brand-light shadow-md transition-all hover:scale-105">
                        Check out
                    </NavLink>
                </div>
            </div>
        </section>
    );
}
