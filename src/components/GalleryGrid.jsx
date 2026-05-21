import { assetUrl } from "../utils/assetUrl";

export function GalleryGrid({ images }) {
    return (
        <div className="mx-auto grid w-full max-w-[760px] grid-cols-1 gap-8 md:grid-cols-2">
            {images.map((image) => (
                <img
                    key={image}
                    src={assetUrl(image)}
                    alt="Festival gallery"
                    className="aspect-[3/2] w-full object-cover shadow-md"
                />
            ))}
        </div>
    );
}
