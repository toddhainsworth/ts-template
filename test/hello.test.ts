import { world } from "../src/hello";

describe('world', () => {
    it('squares the size of the world', () => {
        expect(world(2)).toEqual(4);
    });
});
