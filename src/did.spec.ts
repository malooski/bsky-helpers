/* eslint-disable @typescript-eslint/no-floating-promises */

import { describe, it } from "node:test";

import { toDid } from "./did.js";
import * as assert from "node:assert";

describe("did", () => {
    describe("toDid", () => {
        testValid("did:plc:44ybard66vv44zksje25o7dz");
        testValid("did:plc:rodounzb7hsexmrbxmcodrbq");
        testValid("did:plc:xzbqosqdjzjm37fw37korpxr");
        testValid("did:plc:mig6pq6lyriz4s5q7jxzuhgx");

        function testValid(input: string) {
            it("should return a valid did if valid", () => {
                const result = toDid(input);
                assert.equal(result, input);
            });
        }
    });
});
