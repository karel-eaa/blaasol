export function SectionTitle({ text = "Title text", className = ""}) {
    return (
        <h2 className={`font-bowlby text-brand-blue text-section-title ${className}`} dangerouslySetInnerHTML={{ __html: text }} />
    )
}