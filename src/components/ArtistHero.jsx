import { assetUrl } from "../utils/assetUrl";
import { Section } from "./Section";

export function ArtistHero({ artist }) {
    return (
        <Section
            bgImg="Sun_rays.png"
            className="min-h-fit pt-12 pb-16"
            classNameChildren="w-full max-w-[980px] px-6 md:px-10"
        >
            <div className="z-10 flex w-full flex-col gap-6">
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-end md:gap-8">
                    <h1 className="font-bowlby text-3xl leading-none text-brand-red md:text-5xl">
                        {artist.name}
                    </h1>
                    <p className="font-bowlby text-base leading-tight text-brand-blue md:text-lg">
                        {artist.genres.join(", ")}
                    </p>
                </div>
                <div className={`w-full overflow-hidden ${artist.bgClass}`}>
                    <img
                        src={assetUrl(artist.image)}
                        alt={artist.name}
                        className="aspect-square w-full object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}
