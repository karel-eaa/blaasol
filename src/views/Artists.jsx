import { assetUrl } from "../utils/assetUrl";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { ScheduleWidget } from "../components/ScheduleWidget";
import { ArtistSearchList } from "../components/ArtistSearchList";
import { MatchSong } from "../components/MatchSong";
import { artists } from "../data/artists";

export function Artists() {
    return (
        <div className="flex min-h-screen flex-col bg-brand-light text-brand-dark">
            <NavBar blue={true} />
            <ScheduleWidget />
            <ArtistSearchList artists={artists} />
            <Section bgImg="bg-sun.png" className="min-h-fit pt-12 pb-16">
                <h2 className="z-10 mb-2 text-center font-bowlby text-lg uppercase text-brand-dark">MATCH THE SONG</h2>
                <div className="z-10 w-full"><MatchSong /></div>
            </Section>
            <div className="flex bg-brand-light">
                <img className="mx-auto mb-[-250px] h-[400px] pointer-events-none md:mb-[-400px] md:h-[800px] lg:h-[1021px]" src={assetUrl("footer-sun.png")} alt="" />
            </div>
            <Footer />
        </div>
    );
}
