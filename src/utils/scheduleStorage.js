import { artists } from "../data/artists";

export const SCHEDULE_STORAGE_KEY = "blaasol:savedScheduleArtistIds";

export function readSavedScheduleArtistIds() {
    try {
        const value = window.localStorage.getItem(SCHEDULE_STORAGE_KEY);
        const parsed = value ? JSON.parse(value) : [];
        if (!Array.isArray(parsed)) return [];

        const validIds = new Set(artists.map((artist) => artist.id));
        return parsed.filter((id) => typeof id === "string" && validIds.has(id));
    } catch {
        return [];
    }
}

export function writeSavedScheduleArtistIds(artistIds) {
    window.localStorage.setItem(SCHEDULE_STORAGE_KEY, JSON.stringify(artistIds));
}
