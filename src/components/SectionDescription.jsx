import { twMerge } from "tailwind-merge"

export function SectionDescription({ text = "Text of description", className }) {
    return (
        <p
            className={twMerge(`font-poppins text-brand-dark text-sm`, className)}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    )
}