import longestSubstring from "./longestsubstring";
interface TestString {
  testNum: number;
  value: string;
  result: number;
}
const testStrings: TestString[] = [
  {
    testNum: 1,
    value: "retested",
    result: 4
  },
  {
    testNum: 2,
    value: "abba",
    result: 2
  },
  {
    testNum: 3,
    value: "banana",
    result: 3
  }
];

testStrings.forEach(({ result, testNum, value }) => {
  test(`${value} returns ${result}`, () =>
    expect(longestSubstring(value)).toBe(result));
});

// test("retested returns 4", () => expect(longestSubstring("retested")).toBe(4));
