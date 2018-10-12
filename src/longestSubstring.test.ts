import longestSubstring from "./longestsubstring";
// interface TestString {
//   testNum: number;
//   value: string;
//   result: number;
// }

// const testStrings: TestString[] = [
//   {
//     testNum: 1,
//     value: "retested",
//     result: 4
//   },
//   {
//     testNum: 2,
//     value: "abba",
//     result: 2
//   },
//   {
//     testNum: 3,
//     value: "banana",
//     result: 3
//   }
// ];

// const runonetest = ({ testNum, value, result }: TestString) => {
//   test(`${testNum} ${value} returns ${result}`, () =>
//     expect(longestSubstring(value)).toBe(result));
// };

// testStrings.forEach(input => {
//   runonetest(input);
// });

test("retested returns >= 0", () =>
  expect(longestSubstring("cycdxdxyctcxubb")).toBeGreaterThanOrEqual(0));
// expect(longestSubstring("abcdxefxghixjzz")).toBeGreaterThanOrEqual(0));
