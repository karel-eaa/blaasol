export function ArtistSchedule({ artist }) {
    return (
        <section className="mx-auto grid w-full max-w-[980px] gap-12 px-6 py-12 md:grid-cols-2 md:px-10 md:py-20">
            <div>
                <h2 className="font-bowlby text-lg leading-none text-brand-blue">
                    Schedule
                </h2>
                <p className="mt-8 font-bowlby text-base leading-tight text-brand-red">
                    {artist.scheduleDate}, - {artist.scheduleTime}
                </p>
            </div>
            <div>
                <h2 className="font-bowlby text-base leading-tight text-brand-blue">
                    Short Description
                </h2>
                <p className="mt-8 max-w-[360px] font-poppins text-sm font-light leading-relaxed text-brand-dark">
                    {artist.shortDescription}
                </p>
            </div>
        </section>
    );
}
