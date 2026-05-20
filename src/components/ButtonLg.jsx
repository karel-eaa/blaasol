export function ButtonLg({ text = "Text here", href = "/", className = "" }) {
    return (
        <a className={`bg-brand-red text-brand-light text-base font-bowlby px-[35px] py-[10px] rounded-[15px] cursor-pointer w-fit ${className}`}>{text}</a>
    )
}