import { ButtonLg } from "../components/ButtonLg";
import { Footer } from "../components/Footer";
import { GalleryContainer } from "../components/GalleryContainer";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { SectionDescription } from "../components/SectionDescription";
import { SectionTitle } from "../components/SectionTitle";
import { Stack } from "../components/Stack";

export function Experience() {
    return (<>
        <Section classNameChildren={"items-start"} className={"min-h-fit"}>
            <div className="w-full">
                <NavBar blue={true} />
            </div>
            <Stack className="pt-section-top mx-12 mb-12 items-start md:mx-32" gap="gap-section-gap">
                <Stack className="items-start">
                    <SectionTitle text="EVERYTHING WE HAVE TO OFFER" className={""} />
                    <div className="flex flex-col gap-8 ml-4 border-l-3 border-brand-red">
                        <SectionTitle text="&nbsp&nbsp&nbsp&nbspTHE EXPERIENCE" className={"text-brand-dark"} />
                        <SectionTitle text="&nbsp&nbsp&nbsp&nbspTHE MAP" className={"text-brand-dark"} />
                        <SectionTitle text="&nbsp&nbsp&nbsp&nbspFREE DRINKS" className={"text-brand-dark"} />
                    </div>
                </Stack>
            </Stack>
        </Section>
        <Section bgImg={"bg-place.png"} className={"min-h-fit md:px-34 px-4 md:py-34 py-4"} gradient={false}>
            <SectionTitle text="The experience" className="text-brand-red" />
            <br />
            <br />
            <SectionTitle text="A place where a festival environment meets art and makes a unique and renewing experience. A place to reflect and feel inspired at the same time, all while enjoying BLA SOL with your favorite community. 
BLA SOL brings creativity to life with local brands and artists to make your festival experience just a little more of a story to tell. " className="text-brand-light text-base" />
        </Section>
        <Section bgImg={"bg-sun.png"} bgPadding="md:inset-y-[30px] md:inset-x-[80px]" className={"min-h-fit"}>
            <Stack className="py-18">
                <SectionTitle text="The local brands we work with" className="" />
                <GalleryContainer imgs={["thor.png", "royal.png", "rk.png", "berry.png"]} imgSize={"size-64"} />
                <ButtonLg text="See all our partners" className="mt-12" />
            </Stack>
        </Section>

        <Section bgImg={"bg-sun.png"} bgPadding="md:inset-y-[30px] md:inset-x-[80px]" className={"min-h-fit"}>
            <Stack className="py-18">
                <SectionTitle text="The local artists we work with" className="" />
                <GalleryContainer imgs={["downtown.png", "karoline.png", "bonad2.png", "anastasia.png"]} names={["DOWNTOWN JULY", "Karoline Mousing", "BONAD", "ANASTASIA"]} darkNames={true} />
                <ButtonLg text="See all our lineup" className="mt-12" />
            </Stack>
        </Section>

        <Section bgImg={"bg-sun-reversed.png"} bgPadding="md:inset-y-[30px] md:inset-x-[80px]" className={"min-h-fit py-12"}>
            <Stack>
                <SectionTitle text="The map" />
                <img src="/blaasol/map.png" alt="" />
            </Stack>
        </Section>

        <Section className={"min-h-fit"}>
            <Stack className="py-8" className={"items-start"}>
                <SectionTitle text="Beer too expensive?" className="text-brand-dark" />
                <div className="flex justify-end w-full items-end mx-12">
                    <SectionTitle text="Going hungry all the time?" className="text-brand-dark text-right" />
                </div>
                <SectionTitle text="Spent all your money on the tickets?" className="text-brand-dark" />
            </Stack>
        </Section>

        <Section className={"pt-section-gap min-h-fit mb-24"}>
            <Stack className="items-start">
                <SectionTitle text="Do Good Acts ©" className="" />
                <SectionDescription text="Do Good Acts like collecting trash and helping people and earn rewards!" />
                <SectionDescription text="Get as many stamp cards as you can from staff." />
                <SectionDescription text="You can choose between one free beer or one free hotdog." />
                <Stack className="md:flex-row">
                    <Section bgImg={"bg-sun-center.png"} className={"min-h-fit"}>
                        <img src="/blaasol/ticket.png" alt="" />
                    </Section>
                    <div className="flex flex-col gap-8">
                        <SectionTitle text="Get stamps by:" />
                        <SectionDescription text="Collect a full bag of trash and get a stamp." />
                        <SectionDescription text="Help someone needing medical attention and get a stamp." />
                        <SectionDescription text="Do a correct report of drug use and get a stamp." />
                    </div>
                </Stack>
            </Stack>
        </Section>
        <Footer />
    </>)
}