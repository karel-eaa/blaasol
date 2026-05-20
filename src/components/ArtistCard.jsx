import { assetUrl } from "../utils/assetUrl";
import { NavLink } from "react-router";

export function ArtistCard({ id, name, image, img, cardDate, date, bgClass, bubbleBg, bubbleText }) {
    const displayImage = image ?? img;
    const displayDate = cardDate ?? date;

    return (
        <NavLink to={`/artists/${id}`} className={`relative w-full aspect-square rounded-[15px] overflow-hidden shadow-lg flex flex-col justify-end p-6 border border-black/5 hover:shadow-2xl transition-shadow duration-300 ${bgClass}`}>
            <img src={assetUrl(displayImage)} alt={name} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className={`absolute top-4 right-4 max-w-[65%] rounded-[15px] p-3 text-[11px] md:text-xs font-poppins font-medium leading-normal shadow-sm pointer-events-none ${bubbleBg}`}>
                {bubbleText}
            </div>
            <div className="relative z-10 flex flex-col">
                <span className="font-bowlby text-[#F45348] text-base leading-none">{name}</span>
                <span className="font-bowlby text-[#0393CA] text-sm leading-none mt-1">{displayDate}</span>
            </div>
        </NavLink>
    );
}
