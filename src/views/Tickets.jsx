import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { SectionDescription } from "../components/SectionDescription";
import { SectionTitle } from "../components/SectionTitle";
import { Stack } from "../components/Stack";
import { TicketCard } from "../components/TicketCard";

export function Tickets() {
    return (<>
        <Section bgImg={"bg-sun.png"} classNameChildren={"items-start"} className={"min-h-fit"}>
            <div className="w-full">
                <NavBar blue={true} />
            </div>
            <Stack className="pt-section-top mx-12 mb-12 items-start md:mx-32" gap="gap-section-gap">
                <Stack className="items-start">
                    <SectionTitle text="BLA SOL 2026" className={"font-bold text-brand-dark"} />
                    <SectionDescription text='<img style="display: inline; padding-right: 8px; height: 45px;" src="/blaasol/calendar.png" alt="" /> 26 June 2026' className={"font-bold"} />
                    <SectionDescription text='<img style="display: inline; padding-right: 8px;" src="/blaasol/compass.png" alt="" /> Nordre Fælledvej, 8930 Randers' className={"font-bold"} />
                </Stack>
            </Stack>
        </Section>
        <SectionTitle text="Tickets" className="md:mx-32 my-12" />
        <Section bgImg={"bg-sun-center.png"} bgPadding="md:inset-y-[30px] md:inset-x-[80px]">
            <Stack className="py-18">
                <TicketCard titleText="Standard ticket" descriptionText="Vores vejledende digitale pris lige indtil d. 5. Juni 2026." price="880" />
                <TicketCard titleText="VIP ticket" descriptionText="Med adgang til VIP-området. Inkl. Aftenbuffet, Snacks, Fri Øl og Vand. Fra kl. 13 til 24." price="2075" />
                <TicketCard titleText="Early bird 1" descriptionText="Nåede du ikke Early Bird billetsalget? Bare rolig, vi har 1000 ekstra billetter til en god pris" price="680" />
                <TicketCard titleText="Early bird 2" descriptionText="Nåede du ikke Early Bird billetsalget? Bare rolig, vi har 1000 ekstra billetter til en god pris" price="780" />
            </Stack>
        </Section>

        <SectionTitle text="Born & Unge" className="md:mx-32 my-12" />
        <Section bgImg={"bg-sun-center.png"} bgPadding="md:inset-y-[30px] md:inset-x-[80px]">
            <Stack className="py-18">
                <TicketCard titleText="BØRNEBILLET" descriptionText="Er du mellem 6 og 14 år? Så kommer du billigt til BLÅ SOL. Billetten gælder for barn mellem 6 og 14 år på festivaldagen, i følgeskab med en voksen." price="350" />
                <TicketCard titleText="UNGEBILLET" descriptionText="Er du mellem 15 og 17 år? Så kommer du billigt til BLÅ SOL. Billetten gælder for barn mellem 15 og 17 år på festivaldagen." price="350" />
            </Stack>
        </Section>
        <Footer />
    </>)
}