import { assetUrl } from "../utils/assetUrl";
import { ScheduleCard } from "./ScheduleCard";

export function ScheduleUpcomingList({ artists, searchQuery, onSearchChange, onAdd }) {
    return (
        <section className="relative overflow-hidden pb-20">
            <div
                className="absolute inset-x-0 top-0 bottom-0 bg-contain bg-top bg-no-repeat opacity-80"
                style={{ backgroundImage: `url(${assetUrl("Sun_rays.png")})` }}
            />
            <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col gap-12 px-6 md:px-10">
                <div>
                    <h2 className="font-bowlby text-lg leading-tight text-brand-dark">
                        Upcoming Schedule
                    </h2>
                    <div className="mx-auto mt-12 flex w-full max-w-[620px] items-center rounded-[15px] border-2 border-brand-red bg-transparent px-5 py-3">
                        <input
                            type="search"
                            value={searchQuery}
                            onChange={(event) => onSearchChange(event.target.value)}
                            aria-label="Search schedule"
                            className="min-w-0 flex-1 bg-transparent font-poppins text-base font-medium text-brand-dark outline-none placeholder:text-brand-dark/60"
                        />
                        <img src={assetUrl("Search.svg")} className="h-12 w-12" alt="" />
                        <img src={assetUrl("Filter.svg")} className="ml-5 h-12 w-12" alt="" />
                    </div>
                </div>

                {artists.map((artist) => (
                    <ScheduleCard
                        key={artist.id}
                        artist={artist}
                        actionLabel="Add to list"
                        onAction={onAdd}
                    />
                ))}

                {artists.length === 0 && (
                    <p className="text-center font-poppins text-base font-medium text-brand-dark">
                        No artists match your search.
                    </p>
                )}
            </div>
        </section>
    );
}
