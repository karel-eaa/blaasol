import { NavLink, useParams } from "react-router";
import { assetUrl } from "../utils/assetUrl";
import { ArtistHero } from "../components/ArtistHero";
import { ArtistLifeStory } from "../components/ArtistLifeStory";
import { ArtistSchedule } from "../components/ArtistSchedule";
import { ArtistTopSongs } from "../components/ArtistTopSongs";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { artists } from "../data/artists";

export function Artist() {
    const { id } = useParams();
    const artist = artists.find((item) => item.id === id);

    if (!artist) {
        return (
            <div className="flex min-h-screen flex-col bg-brand-light text-brand-dark">
                <NavBar blue={true} />
                <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
                    <h1 className="font-bowlby text-lg leading-tight text-brand-red">
                        Artist not found
                    </h1>
                    <p className="max-w-[520px] font-poppins text-base font-medium">
                        This artist page does not exist yet. Head back to the full lineup and pick another artist.
                    </p>
                    <NavLink to="/artists" className="bg-brand-blue px-8 py-3 font-bowlby text-base text-brand-light">
                        Back to artists
                    </NavLink>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col bg-white text-brand-dark">
            <NavBar blue={true} />
            <main>
                <ArtistHero artist={artist} />
                <ArtistSchedule artist={artist} />
                <ArtistTopSongs artist={artist} />
                <ArtistLifeStory artist={artist} />
                <div className="flex bg-white">
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
