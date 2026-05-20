import { twMerge } from "tailwind-merge";
import { assetUrl } from "../utils/assetUrl";
import { SectionTitle } from "./SectionTitle";

export function GalleryContainer({ imgs = [], names = null, gap = "gap-[50px]", imgSize = null, darkNames = false }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${gap}`}>
                {imgs.map((img, i) => (
                    <div className="flex flex-col items-center gap-6">
                        <img key={i} src={assetUrl(img)} className={twMerge(`h-[365px] w-auto ${imgSize}`)} />
                        {names ? <SectionTitle text={names[i]} className={ darkNames ? "text-brand-dark" : "text-brand-red"} /> : ""}
                    </div>
                ))}
        </div>
    )
}