import { ButtonLg } from "./ButtonLg";
import { Section } from "./Section";
import { assetUrl } from "../utils/assetUrl";

export function GalleryTestimony({ id, story, href, bgImg = "bg-sun.png" }) {
    return (
        <Section id={id} bgImg={bgImg} className="min-h-fit scroll-mt-12 py-16" classNameChildren="px-6 md:px-10">
            <div className="z-10 mx-auto grid w-full max-w-[980px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                <img
                    src={assetUrl(story.image)}
                    alt={story.title}
                    className="mx-auto aspect-square w-full max-w-[260px] object-cover"
                />
                <div className="flex flex-col items-center gap-8 text-center">
                    <h2 className="font-bowlby text-base text-brand-dark">{story.title}</h2>
                    <p className="max-w-[540px] font-poppins text-base font-medium leading-relaxed text-brand-dark">
                        {story.quote}
                    </p>
                    <ButtonLg href={href} text="Read Testimony" />
                </div>
            </div>
        </Section>
    );
}
