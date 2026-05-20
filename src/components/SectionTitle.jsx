import { twMerge } from "tailwind-merge";

export function SectionTitle({ text = "Title text", className = ""}) {
    return (
        <h2 className={twMerge(`font-bowlby text-brand-blue text-lg ${className}`)} dangerouslySetInnerHTML={{ __html: text }} />
    )
}