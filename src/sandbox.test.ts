import sum, { logTest } from "./sandbox";

test("log test", () => expect(logTest()).toBeFalsy());
test("2+2 returns 4", () => expect(sum(2, 2)).toBeCloseTo(4));
