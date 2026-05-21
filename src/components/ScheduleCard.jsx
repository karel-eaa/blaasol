export function ScheduleCard({ artist, actionLabel, onAction }) {
    return (
        <article className="grid w-full gap-8 rounded-[15px] border-2 border-brand-blue bg-brand-light p-6 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
                <h3 className="font-bowlby text-base uppercase leading-tight text-brand-dark">
                    {artist.name}
                </h3>
                <p className="mt-2 font-bowlby text-sm uppercase leading-tight text-brand-dark">
                    Schedule: {artist.scheduleTime}
                </p>
                <p className="mt-2 font-poppins text-sm font-medium text-brand-dark">
                    {artist.scheduleDate}
                </p>
            </div>
            <button
                type="button"
                onClick={() => onAction(artist.id)}
                className="rounded-[10px] border border-brand-dark/60 bg-artist-light px-6 py-3 font-bowlby text-sm uppercase text-brand-dark transition-all hover:scale-[1.01]"
            >
                {actionLabel}
            </button>
        </article>
    );
}
