import { NavLink } from "react-router";

export function ButtonLg({ text = "Text here", href = "/", className = "" }) {
    const classes = `bg-brand-red text-brand-light text-base font-bowlby px-[35px] py-[10px] rounded-[15px] cursor-pointer w-fit ${className}`;
    if (href.startsWith("http")) {
        return <a href={href} className={classes}>{text}</a>;
    }

    return (
        <NavLink to={href} className={classes}>{text}</NavLink>
    );
}
