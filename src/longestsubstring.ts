import {
  MultipleLetters,
  PossibleLengths,
  SingleLetters
} from "./workingstorage";

const getFirstOffset = (inputMinOffset: number) => {
  let firstOffset = 0;
  if (inputMinOffset > 0) {
    firstOffset = inputMinOffset;
  }
  return firstOffset;
};

const getPossibleLengths = (
  multipleLetters: MultipleLetters,
  lengthOfString: number
) => {
  const possibleLengths: PossibleLengths = {};
  let possibleLengthsKey = 1;
  let offsets = [];
  let offsetsIndex = 0;
  let minOffset = 0;
  let maxOffset = 0;
  for (const multipleLettersKey of Object.keys(multipleLetters)) {
    offsets = multipleLetters[multipleLettersKey];
    offsetsIndex = 0;
    while (offsetsIndex < offsets.length) {
      if (offsetsIndex === 0) {
        getFirstOffset(offsets[offsetsIndex]);
      } else {
        minOffset = offsets[offsetsIndex - 1] + 1;
      }
      offsetsIndex++;
      if (offsetsIndex === offsets.length) {
        maxOffset = lengthOfString;
      } else {
        maxOffset = offsets[offsetsIndex] - 1;
      }
      possibleLengths[possibleLengthsKey++] = {
        min: minOffset,
        max: maxOffset,
        len: maxOffset - minOffset + 1
      };
    }
  }
  return possibleLengths;
};

const getMultipleLetters = (inputString: string) => {
  const singleLetters: SingleLetters = {};
  const multipleLetters: MultipleLetters = {};

  for (let i = 0; i < inputString.length; i++) {
    if (multipleLetters.hasOwnProperty(inputString[i])) {
      multipleLetters[inputString[i]].push(i);
    } else {
      if (singleLetters.hasOwnProperty(inputString[i])) {
        multipleLetters[inputString[i]] = [
          singleLetters[inputString[i]].offset
        ];
        delete singleLetters[inputString[i]];
        multipleLetters[inputString[i]].push(i);
      } else {
        singleLetters[inputString[i]] = { offset: i };
      }
    }
  }
  console.log("singleLetters < \n", singleLetters, "\n >");
  return multipleLetters;
};

const longestSubstring = (inputString: string) => {
  const lengthOfString = inputString.length - 1;
  const multipleLetters = getMultipleLetters(inputString);

  const possiblelengths = getPossibleLengths(multipleLetters, lengthOfString);

  console.log("inputString < \n", inputString, "\n >");
  console.log("multipleLetters < \n", multipleLetters, "\n >");
  console.log("possibleLengths < \n", possiblelengths, "\n  >");

  return lengthOfString;
};

export default longestSubstring;
