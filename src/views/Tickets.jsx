import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { SectionDescription } from "../components/SectionDescription";
import { SectionTitle } from "../components/SectionTitle";
import { Stack } from "../components/Stack";

export function Tickets() {
    return (<>
        <NavBar />
        <Section bgImg={"bg-sun.png"} classNameChildren={"items-start"} className={"min-h-fit"}>
            <Stack className="pt-section-top mx-12 mb-12 items-start" gap="gap-section-gap">
                <SectionTitle text="Tickets" className="" />
                <Stack className="items-start">
                    <SectionDescription text="BLA SOL 2026" className={"font-bold"} />
                    <SectionDescription text='<img style="display: inline; padding-right: 8px; height: 45px;" src="/blaasol/calendar.png" alt="" /> 26 June 2026' className={"font-bold"} />
                    <SectionDescription text='<img style="display: inline; padding-right: 8px;" src="/blaasol/compass.png" alt="" /> Nordre Fælledvej, 8930 Randers' className={"font-bold"} />
                </Stack>
            </Stack>
        </Section>
        <Section bgImg={"bg-people.png"}>
            <Stack>
                <div className="bg-brand-light px-[40px] mx-[80px] mt-[100px] py-[20px]">
                    <Stack className="items-start">
                        <SectionTitle text="Standard ticket" className="pt-[20px]" />
                        <Stack className="items-start">
                            <SectionDescription text="<b>description description description description description description description</b>" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <SectionTitle className="text-brand-dark" text="880 KR" />
                                    <SectionDescription text="<b>+30 KR</b>" />
                                </div>
                                <div className="flex justify-center h-fit">
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="-" />
                                    <SectionTitle className="text-brand-dark px-12 text-center" text="0" />
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="+" />
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </div>

                <div className="bg-brand-light px-[40px] mx-[80px] mt-[100px] py-[20px]">
                    <Stack className="items-start">
                        <SectionTitle text="VIP ticket" className="pt-[20px]" />
                        <Stack className="items-start">
                            <SectionDescription text="<b>description description description description description description description</b>" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <SectionTitle className="text-brand-dark" text="880 KR" />
                                    <SectionDescription text="<b>+30 KR</b>" />
                                </div>
                                <div className="flex justify-center h-fit">
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="-" />
                                    <SectionTitle className="text-brand-dark px-12 text-center" text="0" />
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="+" />
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </div>

                <div className="bg-brand-light px-[40px] mx-[80px] mt-[100px] py-[20px]">
                    <Stack className="items-start">
                        <SectionTitle text="Early bird ticket 1" className="pt-[20px]" />
                        <Stack className="items-start">
                            <SectionDescription text="<b>description description description description description description description</b>" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <SectionTitle className="text-brand-dark" text="880 KR" />
                                    <SectionDescription text="<b>+30 KR</b>" />
                                </div>
                                <div className="flex justify-center h-fit">
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="-" />
                                    <SectionTitle className="text-brand-dark px-12 text-center" text="0" />
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="+" />
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </div>

                <div className="bg-brand-light px-[40px] mx-[80px] mt-[100px] py-[20px]">
                    <Stack className="items-start">
                        <SectionTitle text="Early bird ticket 2" className="pt-[20px]" />
                        <Stack className="items-start">
                            <SectionDescription text="<b>description description description description description description description</b>" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <SectionTitle className="text-brand-dark" text="880 KR" />
                                    <SectionDescription text="<b>+30 KR</b>" />
                                </div>
                                <div className="flex justify-center h-fit">
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="-" />
                                    <SectionTitle className="text-brand-dark px-12 text-center" text="0" />
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="+" />
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </div>
            </Stack>
        </Section>

        <Section classNameChildren={"items-start"} className={"min-h-fit"}>
            <Stack className="pt-section-top mx-12 mb-12 items-start" gap="gap-section-gap">
                <SectionTitle text="Born & Unge" className="" />
            </Stack>

            <Stack>
                <div className="bg-brand-light px-[40px] mx-[80px] py-[20px]">
                    <Stack className="items-start">
                        <SectionTitle text="BØRNEBILLET" className="pt-[20px]" />
                        <Stack className="items-start">
                            <SectionDescription text="<b>description description description description description description description</b>" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <SectionTitle className="text-brand-dark" text="350 KR" />
                                    <SectionDescription text="<b>+30 KR</b>" />
                                </div>
                                <div className="flex justify-center h-fit">
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="-" />
                                    <SectionTitle className="text-brand-dark px-12 text-center" text="0" />
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="+" />
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </div>

                <div className="bg-brand-light px-[40px] mx-[80px] mt-[100px] py-[20px]">
                    <Stack className="items-start">
                        <SectionTitle text="UNGEBILLET" className="pt-[20px]" />
                        <Stack className="items-start">
                            <SectionDescription text="<b>description description description description description description description</b>" />
                            <div className="flex w-full justify-between">
                                <div className="flex flex-col">
                                    <SectionTitle className="text-brand-dark" text="350 KR" />
                                    <SectionDescription text="<b>+30 KR</b>" />
                                </div>
                                <div className="flex justify-center h-fit">
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="-" />
                                    <SectionTitle className="text-brand-dark px-12 text-center" text="0" />
                                    <SectionTitle className="text-brand-dark b-brand-dark border px-8 text-center" text="+" />
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </div>
            </Stack>
        </Section>
        <Footer />
    </>)
}