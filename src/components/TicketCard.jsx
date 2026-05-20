import { useState } from "react";
import { SectionDescription } from "./SectionDescription";
import { SectionTitle } from "./SectionTitle";
import { Stack } from "./Stack";

export function TicketCard({ titleText = "Standard ticket", descriptionText = "Vores vejledende digitale pris lige indtil d. 5. Juni 2026.", price = "880" }) {

    let [counter, setCounter] = useState(0)

    return (<>
        <div className="bg-brand-light px-[40px] mx-[80px] mt-[100px] py-[20px] rounded-[20px] border-2 border-brand-red md:min-w-[800px] md:max-w-[800px]">
            <Stack className="items-start">
                <SectionTitle text={titleText} className="" />
                <Stack className="items-start w-full">
                    <SectionDescription text={descriptionText} className="text-base" />
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col">
                            <SectionTitle className="text-brand-dark" text={price + " KR"} />
                            <SectionDescription text="<b>+30 KR gebyr</b>" />
                        </div>
                        <div className="flex h-fit items-center">
                            <div onClick={() => counter > 0 ? setCounter(counter - 1) : null }><SectionTitle className="text-brand-red border border-brand-red px-4 text-center rounded-[8px] cursor-pointer select-none" text="-" /></div>
                            <SectionTitle className="text-brand-red px-4 text-center" text={counter} />
                            <div onClick={() => setCounter(counter + 1)}><SectionTitle className="text-brand-red b-brand-dark border border-brand-red px-4 text-center rounded-[8px] cursor-pointer select-none" text="+" /></div>
                        </div>
                    </div>
                </Stack>
            </Stack>
        </div>
    </>)
}