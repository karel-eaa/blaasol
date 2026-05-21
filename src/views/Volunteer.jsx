import { ButtonLg } from "../components/ButtonLg";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { SectionDescription } from "../components/SectionDescription";
import { SectionTitle } from "../components/SectionTitle";
import { Stack } from "../components/Stack";
import { TicketCard } from "../components/TicketCard";

export function Volunteer() {
    return (<>
        <Section classNameChildren={"items-start"} className={"min-h-fit"}>
            <div className="w-full">
                <NavBar blue={true} />
            </div>
        </Section>
        <Section bgImg={"bg-bar.png"} className={"min-h-fit md:px-34 px-4 md:py-34 py-4 mt-8 bg-brand-blue"} gradient={false}>
            <SectionTitle text="Become a volunteer at<br />BLA SOL!" className="text-brand-light text-center" />
            <br />
            <br />
            <ButtonLg text="Start volunteering" />
        </Section>
        <Section bgImg={"bg-sun.png"} className={"min-h-fit"} bgPadding="md:inset-y-[30px] md:inset-x-[80px]">
            <Stack className="pt-8" gap="gap-section-gap">
                <div className="flex flex-col gap-8 items-center">
                    <SectionTitle text="Get the experience of BLA SOL from the <br /> first line" />
                    <SectionDescription className="mx-4 md:max-w-[700px]" text="Have you ever wondered what happens behind the scenes at a festival and what it’s like to be part of it? This is your chance! As a volunteer, you become part of the community that helps bring the festival to life and keeps the experience running smoothly." />
                    <SectionDescription className="mx-4 md:max-w-[700px]" text="Have you ever wondered what happens behind the scenes at a festival and what it’s like to be part of it? This is your chance! As a volunteer, you become part of the community that helps bring the festival to life and keeps the experience running smoothly." />
                </div>
                <div className="flex flex-col gap-8">
                    <SectionTitle text="What we expect? " />
                    <SectionDescription className="mx-4 md:max-w-[700px]" text="- Your volunteer shift will last between 6 to 10 hours, depending on the role you apply for. In some cases, shifts may be split into multiple time slots. You will receive all relevant information once you have signed up." />
                    <SectionDescription className="mx-4 md:max-w-[700px]" text="- Please make sure you are available during the times you provide. If your availability changes, let us know as soon as possible. Keep in mind that changes may not always be possible after the schedule has been finalized." />
                </div>
                <div className="flex flex-col gap-8">
                    <SectionTitle text="What you get in return?" />
                    <SectionDescription className="mx-4 md:max-w-[700px]" text="- Free drinks through the day.<br />
                    - According to your working hours we provide 2 to 3 meals throughout the day.<br/>
                    - Access to the festival before or after your shift." />
                </div>
                <ButtonLg text="Start volunteering" />
            </Stack>
        </Section>

        <SectionTitle text="What we offer" className="md:mx-32 my-8" />
        <Section bgImg={"bg-sun-center.png"} bgPadding="md:inset-y-[30px] md:inset-x-[80px]">
            <Stack className="py-18">
                <TicketCard buttonText="Sign Up" titleText="Before" subTitle={"10 hours of work"} descriptionText="The hours can be completed over 1 or 2 shifts before the day of the festival.<br/>- Help create the framework for an unforgettable experience when you assist with the setup of the festival grounds, decorations, and preparations.<br/>- Setup of booths and furnitureSetup of fences and tents<br/>- Setup of the stageDecorating the groundsSecurity leading up to the festival" price="Setup is from May 15 to June 5, 2026." />
                <TicketCard buttonText="Sign Up" titleText="During" subTitle={"6 hours of work"} descriptionText="The hours must be completed in 1 continuous shift.Help ensure a great experience for guests, artists, and fellow volunteers on the day of the festival – with a smile, an overview, and hands ready to pitch in whenever needed.<br />- Ticket control<br />- Sales and information<br />- Security<br />- Bar<br />- Cleanup and cleaning" price="The festival is on June 6, 2026." />
                <TicketCard buttonText="Sign Up" titleText="After" subTitle={"10 hours of work"} descriptionText="The hours can be completed over 1 or 2 shifts after the day of the festival.We want to leave Nordre Fælled in good condition, and you can help ensure that we can create a fantastic festival year after year.<br/>- Cleanup and cleaning<br/>- Teardown of fences and tents<br/>- Teardown of booths and furniture<br/>- Teardown of the stage<br/>- Security in the days after the festival" price="Teardown is from June 7 to June 30, 2026." />
            </Stack>
        </Section>
        <Section className="min-h-fit">
            <Stack className="mb-12">
                <SectionTitle text="Still some questions?" className="text-brand-dark" />
                <ButtonLg text="Contact US" />
            </Stack>
        </Section>
        <Footer />
    </>)
}