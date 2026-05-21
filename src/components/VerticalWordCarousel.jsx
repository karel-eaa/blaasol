export function VerticalWordCarousel({ words }) {
    return (
        <span className="inline-grid h-[1.2em] overflow-hidden">
            <span className="animate-word-carousel flex flex-col">
                {[...words, words[0]].map((word, index) => (
                    <span key={`${word}-${index}`} className="h-[1.2em] leading-[1.2]">
                        {word}
                    </span>
                ))}
            </span>
        </span>
    );
}
