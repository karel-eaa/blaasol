import { assetUrl } from "../utils/assetUrl";

export function ArtistLifeStory({ artist }) {
    return (
        <section className="relative mx-auto w-full max-w-[980px] overflow-hidden px-6 py-16 md:px-10 md:py-24">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: `url(${assetUrl("bg-sun-center.png")})` }}
            />
            <div className="relative z-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                <div>
                    <h2 className="font-bowlby text-base leading-tight text-brand-blue">
                        LIFE STORY
                    </h2>
                    <div className="mt-8 flex flex-col gap-6 font-poppins text-sm font-light leading-relaxed text-brand-dark">
                        {artist.lifeStory.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <img
                    src={assetUrl(artist.secondaryImage)}
                    alt={`${artist.name} performing live`}
                    className="w-full object-cover md:mt-24"
                />
            </div>
        </section>
    );
}
