export function SectionDescription({ text = "Text of description", className }) {
    return (
        <p className={`font-poppins text-brand-dark text-description-md ${className}`} dangerouslySetInnerHTML={{ __html: text }} />
    )
}