import { assetUrl } from "../utils/assetUrl";

export function ArtistTopSongs({ artist }) {
    return (
        <section className="relative mx-auto w-full max-w-[980px] overflow-hidden px-6 py-12 md:px-10">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: `url(${assetUrl("bg-sun-reversed.png")})` }}
            />
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.35fr] md:items-start">
                <h2 className="font-bowlby text-base leading-tight text-brand-blue">
                    Spotify playlist
                </h2>
                <iframe
                    title={`${artist.name} Spotify playlist`}
                    src={artist.spotifyEmbed}
                    width="100%"
                    height="380"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="w-full max-w-[560px] rounded-[18px] border-0 shadow-sm"
                />
            </div>
        </section>
    );
}
