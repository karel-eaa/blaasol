import { Section } from "./Section";

export function Footer() {
    return (
        <Section bgImg={"bg-footer.png"} className={"justify-end"} >
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-[9px] px-[127px] py-[91px]">
                    <a href="" className="font-bowlby text-button-md text-[#0393CA]">Kontakt</a>
                    <a href="" className="font-bowlby text-button-md text-[#0393CA]">FAQ</a>
                    <a href="" className="font-bowlby text-button-md text-[#0393CA]">Partner</a>
                </div>
                <div className="flex items-end gap-[9px] px-[127px] py-[91px] gap-[46px]">
                    <div className="flex items-center"><img className="h-6 md:h-12" src="./instagram.png" alt="" /></div>
                    <div className="flex items-center"><img className="h-6 md:h-12" src="./facebook.png" alt="" /></div>
                    <div className="flex items-center"><img className="h-6 md:h-12" src="./youtube.png" alt="" /></div>
                    <div className="flex items-center"><img className="h-6 md:h-12" src="./spotify.png" alt="" /></div>
                </div>
            </div>
        </Section>
    )
}