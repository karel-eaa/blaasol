import { assetUrl } from "../utils/assetUrl";
import { NavLink } from "react-router";

export function ArtistCard({ id, name, image, img, cardDate, date, bgClass, bubbleBg, bubbleText }) {
    const displayImage = image ?? img;
    const displayDate = cardDate ?? date;

    return (
        <NavLink to={`/artists/${id}`} className={`relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-[15px] border border-black/5 p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl ${bgClass}`}>
            <img src={assetUrl(displayImage)} alt={name} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className={`pointer-events-none absolute right-4 top-4 max-w-[65%] rounded-[15px] p-3 font-poppins text-sm font-medium leading-normal shadow-sm ${bubbleBg}`}>
                {bubbleText}
            </div>
            <div className="relative z-10 flex flex-col">
                <span className="font-bowlby text-base leading-none text-brand-red">{name}</span>
                <span className="mt-1 font-bowlby text-sm leading-none text-brand-blue">{displayDate}</span>
            </div>
        </NavLink>
    );
}
