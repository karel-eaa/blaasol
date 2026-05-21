import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { SectionDescription } from "../components/SectionDescription";
import { SectionTitle } from "../components/SectionTitle";
import { Stack } from "../components/Stack";
import { TicketCard } from "../components/TicketCard";

export function Tickets() {
    return (<>
        <Section bgImg="bg-sun.png" classNameChildren="items-start" className="min-h-fit">
            <div className="w-full">
                <NavBar blue={true} buyTicketsButton={false} />
            </div>
            <Stack className="pt-section-top mx-12 mb-12 items-start md:mx-32" gap="gap-section-gap">
                <Stack className="items-start">
                    <SectionTitle text="BLA SOL 2026" className="font-bold text-brand-dark" />
                    <SectionDescription text='<img style="display: inline; padding-right: 8px; height: 45px;" src="/blaasol/calendar.png" alt="" /> 26 June 2026' className="font-bold" />
                    <SectionDescription text='<img style="display: inline; padding-right: 8px;" src="/blaasol/compass.png" alt="" /> Nordre Faelledvej, 8930 Randers' className="font-bold" />
                </Stack>
            </Stack>
        </Section>
        <SectionTitle text="Tickets" className="md:mx-32 my-12" />
        <Section bgImg="bg-sun-center.png" bgPadding="md:inset-y-[30px] md:inset-x-[80px]">
            <Stack className="py-18">
                <TicketCard titleText="Standard ticket" descriptionText="Our recommended digital price until June 5, 2026." price="880" />
                <TicketCard titleText="VIP ticket" descriptionText="Access to the VIP area. Includes evening buffet, snacks, free beer, and water from 13:00 to 24:00." price="2075" />
                <TicketCard titleText="Early bird 1" descriptionText="Missed the Early Bird ticket sale? Do not worry, we have 1000 extra tickets at a great price." price="680" />
                <TicketCard titleText="Early bird 2" descriptionText="Missed the Early Bird ticket sale? Do not worry, we have 1000 extra tickets at a great price." price="780" />
            </Stack>
        </Section>

        <SectionTitle text="Children & Youth" className="md:mx-32 my-12" />
        <Section bgImg="bg-sun-center.png" bgPadding="md:inset-y-[30px] md:inset-x-[80px]">
            <Stack className="py-18">
                <TicketCard titleText="Child ticket" descriptionText="Are you between 6 and 14 years old? Then you can attend BLA SOL at a lower price. The ticket is valid for one child aged 6 to 14 on the festival day when accompanied by an adult." price="350" />
                <TicketCard titleText="Youth ticket" descriptionText="Are you between 15 and 17 years old? Then you can attend BLA SOL at a lower price. The ticket is valid for one guest aged 15 to 17 on the festival day." price="350" />
            </Stack>
        </Section>
        <Footer />
    </>);
}
