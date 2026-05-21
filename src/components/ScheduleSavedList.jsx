import { ScheduleCard } from "./ScheduleCard";

export function ScheduleSavedList({ artists, onRemove }) {
    return (
        <section>
            <h1 className="font-bowlby text-lg leading-tight text-brand-dark">
                Schedule
            </h1>
            <div className="mt-16 flex min-h-[150px] flex-col items-center justify-center gap-6 text-center">
                {artists.length === 0 ? (
                    <>
                        <span className="font-bowlby text-base leading-none text-player-control">:c</span>
                        <p className="font-bowlby text-base leading-tight text-player-control">
                            No saved schedule
                        </p>
                    </>
                ) : (
                    <div className="flex w-full flex-col gap-6">
                        {artists.map((artist) => (
                            <ScheduleCard
                                key={artist.id}
                                artist={artist}
                                actionLabel="Remove"
                                onAction={onRemove}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
