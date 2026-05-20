import { assetUrl } from "../utils/assetUrl";

export function ScheduleWidget() {
    return (
        <section className="px-4 md:px-[60px] py-10 w-full">
            <div
                style={{ backgroundImage: `url("${assetUrl("Schedule card background.png")}")` }}
                className="relative w-full max-w-[1000px] h-[250px] mx-auto rounded-[15px] overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-cover bg-center shadow-lg"
            >
                <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="font-bowlby text-[#061826] text-lg uppercase tracking-wide">MAKE YOUR OWN SCHEDULE</h1>
                    <p className="font-poppins text-[#061826] text-xs md:text-sm font-medium mt-2 max-w-[500px]">
                        USE MY SCHEDULE OR CLONE AN EXISTING ONE AND MAKE IT YOUR OWN
                    </p>
                    <button className="bg-brand-red text-brand-light font-bowlby py-2.5 px-8 rounded-[15px] mt-5 cursor-pointer hover:scale-105 transition-all text-base shadow-md">
                        Check out
                    </button>
                </div>
            </div>
        </section>
    );
}
