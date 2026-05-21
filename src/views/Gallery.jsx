import { Footer } from "../components/Footer";
import { GalleryGrid } from "../components/GalleryGrid";
import { GalleryTestimony } from "../components/GalleryTestimony";
import { NavBar } from "../components/NavBar";
import { SectionTitle } from "../components/SectionTitle";
import { assetUrl } from "../utils/assetUrl";
import { galleryImages, patrickStory } from "../data/gallery";

export function Gallery() {
    return (
        <div className="flex min-h-screen flex-col bg-brand-light text-brand-dark">
            <NavBar blue={true} />
            <main>
                <section className="mx-auto flex w-full max-w-[980px] flex-col items-center gap-10 px-6 py-16 md:px-10">
                    <SectionTitle text="Gallery" />
                    <GalleryGrid images={galleryImages} />
                </section>
                <GalleryTestimony id="patrick-story-1" story={patrickStory} href="#patrick-story-2" />
                <section className="mx-auto flex w-full max-w-[980px] flex-col items-center px-6 py-16 md:px-10">
                    <GalleryGrid images={galleryImages} />
                </section>
                <GalleryTestimony id="patrick-story-2" story={patrickStory} href="#patrick-story-1" bgImg="bg-sun-reversed.png" />
                <div className="flex bg-brand-light">
                    <img
                        className="mx-auto mb-[-250px] h-[400px] pointer-events-none md:mb-[-400px] md:h-[800px] lg:h-[1021px]"
                        src={assetUrl("footer-sun.png")}
                        alt=""
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
