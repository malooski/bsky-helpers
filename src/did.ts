import { Tagged } from "type-fest";

/**
 * A DID is a string that identifies a resource.
 * https://atproto.com/specs/did
 */
export type Did = Tagged<string, "Did">;

const MAX_DID_LENGTH = 64; // No real limit, but this is a reasonable one
const DID_REGEX = /^(did):([a-z]+):([a-zA-Z0-9._:%-]*[a-zA-Z0-9._-])$/;

/**
 * Converts a string to a DID.
 * @param s The string to convert.
 * @returns The DID, or null if the string is not a valid DID.
 */
export function toDid(s: string): Did | null {
    if (s.length > MAX_DID_LENGTH) return null;

    const match = DID_REGEX.exec(s);
    if (!match) return null;

    return s as Did;
}
