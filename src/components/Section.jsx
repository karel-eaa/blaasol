import { twMerge } from "tailwind-merge"
import { assetUrl } from "../utils/assetUrl"

export function Section({ id, bgImg = null, children, className, classNameChildren, bgPadding = "inset-0", gradient = true }) {
    return (
        <div id={id} className={twMerge(`relative flex flex-col items-center min-h-screen`, className)}>
            {bgImg && (
                <div
                    style={{ backgroundImage: `url(${assetUrl(bgImg)})` }}
                    className={twMerge(
                        `absolute bg-cover bg-top bg-no-repeat ${gradient ? "[mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_60%,transparent_100%)]" : ""}`,
                        bgPadding
                    )}
                />
            )}
            <div className={twMerge(`relative flex flex-col items-center w-full px-4 md:px-0`, classNameChildren)}>
                {children}
            </div>
        </div>
    )
}
