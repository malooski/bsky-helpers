/* eslint-disable @typescript-eslint/no-floating-promises */

import * as assert from "node:assert";
import { describe, it } from "node:test";

import { toHashtag } from "./hashtag.js";

describe("hashtag", () => {
    describe("toHashtag", () => {
        testValid("#vtubers");
        testValid("#feet");

        testInvalid("#four.twenty");
        testInvalid("#(#*&@(");

        function testValid(input: string) {
            it("should return a valid did if valid", () => {
                const result = toHashtag(input);
                assert.equal(result, input);
            });
        }

        function testInvalid(input: string) {
            it("should return null if invalid", () => {
                const result = toHashtag(input);
                assert.equal(result, null);
            });
        }
    });
});
