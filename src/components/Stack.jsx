export function Stack({ children, gap = "gap-8", className = "" }) {
    return (
        <div className={`flex flex-col items-center ${gap} ${className}`}>
            {children}
        </div>
    )
}