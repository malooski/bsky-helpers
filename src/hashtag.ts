import { Tagged } from "type-fest";

export type Hashtag = Tagged<string, "Hashtag">;

const HASHTAG_REGEX = /^#([a-zA-Z0-9]+)$/;

export function toHashtag(s: string): Hashtag | null {
    const match = HASHTAG_REGEX.exec(s);
    if (!match) return null;

    return s as Hashtag;
}
