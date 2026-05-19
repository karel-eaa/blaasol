import { assetUrl } from "../utils/assetUrl";

export function GalleryContainer({ imgs = [], gap = "gap-[50px]" }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${gap}`}>
            {imgs.map((img, i) => (
                <img key={i} src={assetUrl(img)} className="h-[365px] w-auto" />
            ))}
        </div>
    )
}