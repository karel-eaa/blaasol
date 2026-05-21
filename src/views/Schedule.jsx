import { useEffect, useMemo, useState } from "react";
import { assetUrl } from "../utils/assetUrl";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ScheduleSavedList } from "../components/ScheduleSavedList";
import { ScheduleUpcomingList } from "../components/ScheduleUpcomingList";
import { artists } from "../data/artists";
import { readSavedScheduleArtistIds, writeSavedScheduleArtistIds } from "../utils/scheduleStorage";

const matchesScheduleSearch = (artist, query) => [
    artist.name,
    artist.scheduleDate,
    artist.scheduleTime,
    ...artist.genres
].join(" ").toLowerCase().includes(query);

export function Schedule() {
    const [savedArtistIds, setSavedArtistIds] = useState(readSavedScheduleArtistIds);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => writeSavedScheduleArtistIds(savedArtistIds), [savedArtistIds]);

    const savedArtistIdSet = useMemo(() => new Set(savedArtistIds), [savedArtistIds]);
    const savedArtists = useMemo(
        () => savedArtistIds.map((id) => artists.find((artist) => artist.id === id)).filter(Boolean),
        [savedArtistIds]
    );
    const addableArtists = useMemo(
        () => artists.filter((artist) => !savedArtistIdSet.has(artist.id)),
        [savedArtistIdSet]
    );
    const filteredArtists = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return query ? addableArtists.filter((artist) => matchesScheduleSearch(artist, query)) : addableArtists;
    }, [addableArtists, searchQuery]);

    const handleAdd = (artistId) => {
        setSavedArtistIds((current) => current.includes(artistId) ? current : [...current, artistId]);
    };
    const handleRemove = (artistId) => {
        setSavedArtistIds((current) => current.filter((id) => id !== artistId));
    };

    return (
        <div className="flex min-h-screen flex-col bg-brand-light text-brand-dark">
            <NavBar blue={true} />
            <main>
                <section className="mx-auto w-full max-w-[1120px] px-6 py-16 md:px-10 md:py-24">
                    <div className="mx-auto w-full max-w-[760px]">
                        <ScheduleSavedList artists={savedArtists} onRemove={handleRemove} />
                    </div>
                </section>
                <ScheduleUpcomingList
                    artists={filteredArtists}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onAdd={handleAdd}
                />
                <div className="flex bg-brand-light">
                    <img
                        className="mx-auto mb-[-250px] h-[400px] pointer-events-none md:mb-[-400px] md:h-[800px] lg:h-[1021px]"
                        src={assetUrl("footer-sun.png")}
                        alt=""
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
