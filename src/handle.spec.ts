/* eslint-disable @typescript-eslint/no-floating-promises */

import * as assert from "node:assert";
import { describe, it } from "node:test";

import { toHandle } from "./handle.js";

describe("handle", () => {
    describe("tohandle", () => {
        testValid("maloo.ski");
        testValid("mezarumi.bsky.social");

        testInvalid("oogabooga");
        testInvalid("did:plc:mig6pq6lyriz4s5q7jxzuhgx");

        function testValid(input: string) {
            it("should return a valid did if valid", () => {
                const result = toHandle(input);
                assert.equal(result, input);
            });
        }

        function testInvalid(input: string) {
            it("should return null if invalid", () => {
                const result = toHandle(input);
                assert.equal(result, null);
            });
        }
    });
});
