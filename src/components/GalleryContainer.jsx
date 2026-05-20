import { assetUrl } from "../utils/assetUrl";
import { SectionTitle } from "./SectionTitle";

export function GalleryContainer({ imgs = [], names = [], gap = "gap-[50px]" }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${gap}`}>
                {imgs.map((img, i) => (
                    <div className="flex flex-col items-center gap-6">
                        <img key={i} src={assetUrl(img)} className="h-[365px] w-auto" />
                        <SectionTitle text={names[i]} className="text-brand-red" />
                    </div>
                ))}
        </div>
    )
}