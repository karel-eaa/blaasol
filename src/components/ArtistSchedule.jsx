export function ArtistSchedule({ artist }) {
    return (
        <section className="mx-auto grid w-full max-w-[980px] gap-12 px-6 py-12 md:grid-cols-2 md:px-10 md:py-20">
            <div>
                <h2 className="font-bowlby text-3xl leading-none text-brand-blue md:text-5xl">
                    Schedule
                </h2>
                <p className="mt-8 font-bowlby text-xl leading-tight text-brand-red md:text-2xl">
                    {artist.scheduleDate}, - {artist.scheduleTime}
                </p>
            </div>
            <div>
                <h2 className="font-bowlby text-xl leading-tight text-brand-blue md:text-2xl">
                    Short Description
                </h2>
                <p className="mt-8 max-w-[360px] font-poppins text-base font-medium leading-relaxed text-brand-dark">
                    {artist.shortDescription}
                </p>
            </div>
        </section>
    );
}
