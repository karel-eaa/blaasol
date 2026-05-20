import { useState } from "react";
import { assetUrl } from "../utils/assetUrl";
import { ArtistCard } from "./ArtistCard";
import { Section } from "./Section";

export function ArtistSearchList({ artists }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(4);

    const filtered = artists.filter((a) =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => { setSearchQuery(e.target.value); setVisibleCount(4); };
    const handleLoadMore = () => setVisibleCount((prev) => Math.min(prev + 4, filtered.length));

    return (
        <Section bgImg="Sun_rays.png" className="min-h-fit py-6 w-full" classNameChildren="flex flex-col items-center w-full px-4 md:px-[60px]">
            <h2 className="font-bowlby text-brand-blue text-lg uppercase text-center mb-6 z-10">CHECK OUT ARTISTS</h2>

            {/* Search bar */}
            <div className="flex items-center bg-white border-[3px] border-[#F45348] rounded-[15px] px-4 py-2.5 max-w-[500px] w-full mb-10 shadow-md z-10">
                <input type="text" value={searchQuery} onChange={handleSearch} className="flex-grow outline-none border-none text-[#061826] font-poppins font-medium text-base py-0 px-2" />
                <img src={assetUrl("Search.svg")} className="w-8 h-8 ml-2 cursor-pointer" alt="Search" />
                <img src={assetUrl("Filter.svg")} className="w-8 h-8 ml-2 cursor-pointer" alt="Filter" />
            </div>

            {/* Artist list */}
            <div className="flex flex-col gap-8 w-full max-w-[450px] z-10">
                {filtered.slice(0, visibleCount).map((artist, idx) => <ArtistCard key={idx} {...artist} />)}
                {filtered.length === 0 && <p className="text-center font-poppins font-medium text-gray-500 my-8">No artists found.</p>}
            </div>

            {filtered.length > visibleCount && (
                <button onClick={handleLoadMore} className="bg-brand-red text-brand-light font-bowlby py-2.5 px-8 rounded-[15px] mt-6 cursor-pointer hover:scale-105 transition-all text-base shadow-md z-10">
                    LOAD MORE
                </button>
            )}
        </Section>
    );
}
