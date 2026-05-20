import { assetUrl } from "../utils/assetUrl";

export function ArtistTopSongs({ artist }) {
    return (
        <section className="relative mx-auto w-full max-w-[980px] overflow-hidden px-6 py-12 md:px-10">
            <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
                style={{ backgroundImage: `url(${assetUrl("bg-sun-reversed.png")})` }}
            />
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.35fr] md:items-start">
                <h2 className="font-bowlby text-xl leading-tight text-brand-blue md:text-2xl">
                    Top songs
                </h2>
                <div className="w-full max-w-[470px] rounded-[18px] bg-[#d9d9d9] p-5 shadow-sm">
                    <div className="grid grid-cols-[96px_1fr] gap-5">
                        <img
                            src={assetUrl(artist.albumCover)}
                            alt={`${artist.name} album cover`}
                            className="aspect-square w-24 object-cover"
                        />
                        <div className="flex flex-col items-center justify-center gap-5 text-[#3f4548]">
                            <p className="font-poppins text-sm font-semibold">{artist.name}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl leading-none">|&lt;</span>
                                <span className="text-2xl leading-none">&gt;|</span>
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3f4548] pl-1 text-2xl leading-none text-white">
                                    &gt;
                                </span>
                            </div>
                        </div>
                    </div>
                    <ol className="mt-4 flex flex-col gap-3">
                        {artist.topSongs.map((song, index) => (
                            <li key={song.title} className="grid grid-cols-[20px_1fr_auto] items-center gap-3 font-poppins text-xs text-[#555]">
                                <span className="text-base font-semibold">{index + 1}</span>
                                <span>
                                    <span className="block font-medium">{song.title}</span>
                                    <span className="block">{song.artist}</span>
                                </span>
                                <span>{song.duration}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
