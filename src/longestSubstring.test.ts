import longestSubstring from "./longestsubstring";
interface TestString {
  value: string;
  result: number;
}

const testStrings: TestString[] = [
  {
    value: "retested",
    result: 4
  },
  {
    value: "abba",
    result: 2
  },
  {
    value: "banana",
    result: 3
  },
  {
    value: "cycdxyxyctcxubb",
    result: 5
  },
  {
    value: "",
    result: 0
  },
  {
    value: "aaaa",
    result: 1
  },
  {
    value: "te st",
    result: 4
  },
  {
    value: "😀😛😛😀",
    result: 2
  }
];

const runonetest = ({ value, result }: TestString, index: number) => {
  test(`${index} ${value} returns ${result}`, () =>
    expect(longestSubstring(value)).toBe(result));
};

testStrings.forEach((input, index) => {
  runonetest(input, index + 1);
});
