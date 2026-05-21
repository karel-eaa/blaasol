import { useState } from "react";
import { NavLink } from "react-router";
import { artists } from "../data/artists";
import { assetUrl } from "../utils/assetUrl";
import { SectionTitle } from "./SectionTitle";

const PAGE_SIZE = 4;

export function HomeArtistCarousel() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleArtists = [...artists, ...artists].slice(startIndex, startIndex + PAGE_SIZE);
    const move = (direction) => {
        setStartIndex((current) => (current + direction + artists.length) % artists.length);
    };

    return (
        <div className="flex w-full items-center justify-center gap-4">
            <button type="button" onClick={() => move(-PAGE_SIZE)} aria-label="Previous artists" className="font-bowlby text-lg text-brand-blue">
                <img src={assetUrl("Arrow.svg")} alt="" className="h-12 w-12 rotate-180" />
            </button>
            <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2">
                {visibleArtists.map((artist) => (
                    <NavLink key={`${artist.id}-${startIndex}`} to={`/artists/${artist.id}`} className="flex flex-col items-center gap-6">
                        <img src={assetUrl(artist.image)} alt={artist.name} className="h-[365px] w-auto" />
                        <SectionTitle text={artist.name} className="text-brand-red" />
                    </NavLink>
                ))}
            </div>
            <button type="button" onClick={() => move(PAGE_SIZE)} aria-label="Next artists" className="font-bowlby text-lg text-brand-blue">
                <img src={assetUrl("Arrow.svg")} alt="" className="h-12 w-12" />
            </button>
        </div>
    );
}
