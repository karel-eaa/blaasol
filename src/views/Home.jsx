// FONT SIZES HELPER (Figma -> Web)
// 25px -> text-[clamp(15px,1.74vw,34px)]
// 30px -> text-[clamp(18px,2.08vw,41px)]
// 40px -> text-[clamp(24px,2.78vw,54px)]
// 50px -> text-[clamp(30px,3.47vw,68px)]
// 60px -> text-[clamp(36px,4.17vw,81px)]

import { ButtonLg } from "../components/ButtonLg";
import { Footer } from "../components/Footer";
import { GalleryContainer } from "../components/GalleryContainer";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { SectionDescription } from "../components/SectionDescription";
import { SectionTitle } from "../components/SectionTitle";
import { Stack } from "../components/Stack";

export function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-[url('/blaasol/bg-image-landing.png')] bg-cover bg-top bg-no-repeat">
                <NavBar />

                {/* hero text — takes remaining space and centers content */}
                <div className="flex-1 flex-col flex md:flex-row md:justify-between justify-center gap-12 items-center md:px-[180px]">
                    <div>
                        <h1 className="text-brand-light font-bowlby text-center">
                            <span className="text-base">Electronic, pop, Danish rock</span><br />
                            <span className="text-lg">6th of June '26</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-[39px]">
                        <h2 className="text-brand-light font-bowlby text-left font-[400] leading-[normal] hidden md:block">
                            <span className="text-lg">benjamin hav & familien<br />
                                zar paulo ◆ gnags ◆<br />
                                saveus ◆ infernal
                            </span>
                        </h2>
                        <h2 className="text-brand-light font-bowlby text-left font-[400] leading-[normal] md:hidden">
                            <span className="text-lg">benjamin hav & familien
                                zar paulo ◆ gnags ◆
                                saveus ◆ infernal
                            </span>
                        </h2>
                        <a className="bg-brand-red text-brand-light font-bowlby py-[10px] px-[31.5px] rounded-[15px] cursor-pointer text-base w-fit mx-auto md:mx-0">Discover our line-up</a>
                    </div>
                </div>
            </div>
            {/* slider with names */}
            <div className="w-full h-[93px] bg-brand-blue mt-[31px] flex items-center overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    <p className="font-bowlby text-brand-light text-base pr-[60px]">
                        Saveus ◆ Infernal ◆ Benjamin Hav ◆ Zar Paulo ◆ Lars Lilhlt Band ◆ Downtown July ◆ Gnags ◆ Rune Rask & Hampenberg ◆ Specktors ◆ Bonad ◆ Karoline Mousing ◆ Elakelaiset ◆ Anastasia ◆ Marie Frank ◆
                    </p>
                    <p className="font-bowlby text-brand-light text-base pr-[60px]" aria-hidden="true">
                        Saveus ◆ Infernal ◆ Benjamin Hav ◆ Zar Paulo ◆ Lars Lilhlt Band ◆ Downtown July ◆ Gnags ◆ Rune Rask & Hampenberg ◆ Specktors ◆ Bonad ◆ Karoline Mousing ◆ Elakelaiset ◆ Anastasia ◆ Marie Frank ◆
                    </p>
                </div>
            </div>
            {/* ON SITE HELP section */}
            <Section bgImg={"bg-sun.png"} className={"min-h-fit"}>
                <Stack className="pt-section-top" gap="gap-section-gap">
                    <SectionTitle text="ON SITE HELP" />
                    <SectionDescription text="Arrived at the festival? Check out all of the activities you can<br /> engage with at the festival. " />
                    <ButtonLg text="CHECK FESTIVAL ESSENTIALS" />
                </Stack>
            </Section>
            {/* Artists section */}
            <Section>
                <Stack className="pt-section-top" gap="gap-section-gap">
                    <SectionTitle text="ARTISTS" />
                    <GalleryContainer imgs={["saveus.png", "rune-rask.png", "benjamin-hav.png", "bonad.png"]} names={["Saveus", "Rune Rask", "Benjamin Hav", "Bonad"]} />
                    <ButtonLg text="SEE MORE" />
                </Stack>
            </Section>
            {/* Match mini-game section */}
            <Section bgImg={"bg-sun.png"}>
                <Stack className="pt-section-gap" gap="gap-section-gap">
                    <SectionTitle text="Don’t know all the artists?<br /> Discover them here" className="text-center" />
                    <div className="flex flex-col items-center gap-[55px] mt-[120px] md:flex-row">
                        <h2 className="order-1 md:hidden text-center font-bowlby text-brand-blue text-lg">Match</h2>
                        <img className="h-[600px] order-2 md:order-1" src="./song.png" alt="" />
                        <div className="hidden md:block order-2">
                            <h2 className="text-center font-bowlby text-brand-blue text-section-title pt-[117px]">Match</h2>
                            <h2 className="text-center font-bowlby text-brand-blue text-section-title pt-[66px]">to</h2>
                        </div>
                        <h2 className="order-3 md:hidden text-center font-bowlby text-brand-blue text-lg">to</h2>
                        <img className="h-[600px] order-4 md:order-3" src="./artist.png" alt="" />
                    </div>
                    <ButtonLg text="PLAY" />
                </Stack>
            </Section>
            {/* No money for festival section */}
            <Section bgImg={"bg-sun-reversed.png"}>
                <Stack className="pt-section-gap" gap="gap-section-gap">
                    <SectionTitle text="No money for the festival?" className="text-center" />
                    <Stack className="md:flex-row">
                        <img className="h-[600px]" src="./no-money.png" alt="" />
                        <Stack>
                            <p className="font-poppins text-[#061826] text-sm pt-[62px]">Arrived at the festival? Check out all of the activities<br />you can engage with at the festival.</p>
                            <a className="bg-[#F45348] text-[#EDF5FC] text-base font-bowlby mt-[92px] px-[40px] py-[10px] rounded-[15px] cursor-pointer w-full text-center">Become volunteer</a>
                            <a className="bg-[#F45348] text-[#EDF5FC] text-base font-bowlby px-[40px] py-[10px] rounded-[15px] cursor-pointer w-full text-center">Get free drinks</a>
                        </Stack>
                    </Stack>
                </Stack>
            </Section>
            {/* Footer */}
            <div className="flex">
                <img className="h-[1021px] mx-auto mb-[-400px]" src="./footer-sun.png" alt="" />
            </div>
            <Footer />
        </>
    );
}