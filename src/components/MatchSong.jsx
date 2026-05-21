import { useState, useEffect } from "react";
import { assetUrl } from "../utils/assetUrl";

const SONGS = [
    { genre: "POP soul",       artist: "SAVEUS",       cover: "albumCover_Saveus.png" },
    { genre: "ELECTRONIC trap", artist: "RUNE RASK",   cover: "albumCover_RuneRask.png" },
    { genre: "DANISH hip-hop", artist: "BENJAMIN HAV", cover: "albumCover_BenjaminHav.png" },
    { genre: "SYNTH rock",     artist: "BONAD",        cover: "albumCover_BONAD.png" },
];

const CHOICES = [
    { name: "SAVEUS",       img: "saveus.png",       bg: "bg-artist-yellow" },
    { name: "RUNE RASK",    img: "rune-rask.png",    bg: "bg-white" },
    { name: "BENJAMIN HAV", img: "benjamin-hav.png", bg: "bg-artist-light" },
    { name: "BONAD",        img: "bonad.png",        bg: "bg-artist-navy" },
];

const BARS = [
    { h: "h-8", d: "0.1s" }, { h: "h-12", d: "0.2s" }, { h: "h-6",  d: "0.3s" },
    { h: "h-10", d: "0.4s" }, { h: "h-14", d: "0.5s", red: true }, { h: "h-8", d: "0.6s", red: true },
    { h: "h-12", d: "0.7s", red: true }, { h: "h-6", d: "0.8s" }, { h: "h-10", d: "0.9s" }, { h: "h-4", d: "1s" },
];

const fmt = (t) => `${Math.floor(t / 60)}:${Math.floor(t % 60).toString().padStart(2, "0")}`;

export function MatchSong() {
    const [idx, setIdx] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (!playing) return;
        const id = setInterval(() => setTime((t) => { if (t >= 20) { setPlaying(false); return 20; } return Math.min(t + 0.1, 20); }), 100);
        return () => clearInterval(id);
    }, [playing]);

    const song = SONGS[idx];
    const progress = (time / 20) * 100;

    const onPlay = () => { if (time >= 20) setTime(0); setPlaying(!playing); };
    const onPrev = () => { setIdx((i) => (i - 1 + SONGS.length) % SONGS.length); setTime(0); setPlaying(false); };
    const onNext = () => { setIdx((i) => (i + 1) % SONGS.length); setTime(0); setPlaying(false); };
    const onGuess = (name) => alert(name === song.artist ? "Correct!" : "Incorrect! Try again.");

    return (
        <div className="flex flex-col items-center w-full max-w-[800px] mx-auto px-4 md:px-0">
            {/* Soundwave */}
            <div className="flex items-center gap-1.5 h-16 my-6">
                {BARS.map((b, i) => <span key={i} className={`w-1.5 ${b.h} ${b.red ? "bg-brand-red" : "bg-brand-dark"} rounded-full animate-pulse`} style={{ animationDelay: b.d }} />)}
            </div>

            {/* Player card */}
            <div style={{ backgroundImage: `url("${assetUrl(song.cover)}")` }} className="relative w-full aspect-[16/9] md:h-[350px] md:w-[800px] rounded-[15px] overflow-hidden bg-cover bg-center flex flex-col justify-end p-6 md:p-8 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                    <h3 className="mb-6 font-bowlby text-base uppercase tracking-wider text-brand-red md:text-lg">{song.genre}</h3>
                    <div className="flex items-center gap-8 mb-6">
                        <button onClick={onPrev} className="p-2 text-brand-light transition-colors hover:text-brand-blue" aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6L18 18V6z" /></svg>
                        </button>
                        <button onClick={onPlay} className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-brand-light transition-all hover:scale-105 hover:bg-brand-blue" aria-label={playing ? "Pause" : "Play"}>
                            {playing
                                ? <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                : <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z" /></svg>}
                        </button>
                        <button onClick={onNext} className="p-2 text-brand-light transition-colors hover:text-brand-blue" aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6zm9-12v12h2V6z" /></svg>
                        </button>
                    </div>
                    <div className="flex w-full items-center gap-4 font-poppins text-sm text-brand-light">
                        <span>{fmt(time)}</span>
                        <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
                            <div className="h-full bg-white rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
                        </div>
                        <span>-{fmt(Math.max(20 - time, 0))}</span>
                    </div>
                </div>
            </div>

            {/* Guess prompt */}
            <div className="flex flex-col items-center mt-10 mb-8">
                <h4 className="font-bowlby text-brand-blue text-base md:text-lg uppercase">GUESS THE ARTIST</h4>
                <svg className="w-6 h-6 text-brand-dark mt-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            {/* Choice grid */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-[700px] mb-12">
                {CHOICES.map((c) => (
                    <button key={c.name} onClick={() => onGuess(c.name)} className={`flex flex-col items-center p-4 rounded-[15px] border-2 border-transparent shadow-md hover:scale-[1.02] cursor-pointer ${c.bg}`}>
                        <div className="w-full aspect-square overflow-hidden rounded-[10px]">
                            <img src={assetUrl(c.img)} alt={c.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="mt-4 font-bowlby text-base text-brand-red">{c.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
