import { twMerge } from "tailwind-merge";

export function Stack({ children, gap = "gap-8", className = "" }) {
    return (
        <div className={twMerge(`flex flex-col items-center ${gap} ${className}`)}>
            {children}
        </div>
    )
}