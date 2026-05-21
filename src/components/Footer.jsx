import { NavLink } from "react-router";
import { navigationLinks } from "../data/navigationLinks";
import { assetUrl } from "../utils/assetUrl";
import { Section } from "./Section";

export function Footer() {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.currentTarget.reset();
        window.alert("Thanks for your message!");
    };

    return (
        <Section bgImg="bg-footer.png" className="justify-end min-h-fit">
            <footer className="flex w-full flex-col gap-12 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-[127px] md:py-[91px]">
                <nav className="flex flex-col gap-3">
                    {navigationLinks.map(({ to, label }) => (
                        <NavLink key={to} to={to} className="font-bowlby text-base text-brand-blue">
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <form onSubmit={handleSubmit} className="flex w-full max-w-[420px] flex-col gap-3">
                    <input required name="name" placeholder="Name" className="rounded-[10px] border border-brand-blue bg-brand-light px-4 py-3 font-poppins text-sm text-brand-dark outline-none" />
                    <input required name="email" type="email" placeholder="Email" className="rounded-[10px] border border-brand-blue bg-brand-light px-4 py-3 font-poppins text-sm text-brand-dark outline-none" />
                    <textarea required name="message" placeholder="Message" rows="4" className="resize-none rounded-[10px] border border-brand-blue bg-brand-light px-4 py-3 font-poppins text-sm text-brand-dark outline-none" />
                    <button type="submit" className="rounded-[10px] bg-brand-blue px-6 py-3 font-bowlby text-sm text-brand-light">
                        Submit
                    </button>
                </form>

                <div className="flex items-end gap-[46px]">
                    <img className="h-6 md:h-12" src={assetUrl("instagram.png")} alt="Instagram" />
                    <img className="h-6 md:h-12" src={assetUrl("facebook.png")} alt="Facebook" />
                    <img className="h-6 md:h-12" src={assetUrl("youtube.png")} alt="YouTube" />
                    <img className="h-6 md:h-12" src={assetUrl("spotify.png")} alt="Spotify" />
                </div>
            </footer>
        </Section>
    );
}
