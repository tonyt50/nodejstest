interface SingleLetters {
  [key: string]: number[];
}
interface MultipleLetters {
  [key: string]: number[];
}
interface PossibleLengths {
  [key: string]: {
    min: number;
    max: number;
    len: number;
  };
}
const getpossiblelengths = (
  multipleletters: MultipleLetters,
  lengthofstring: number
) => {
  const possiblelengths: PossibleLengths = {};
  let possiblelengthskey = 1;
  let offsets = [];
  let offsetsindex = 0;
  let minoffset = 0;
  let maxoffset = 0;
  for (const multipleletterskey of Object.keys(multipleletters)) {
    offsets = multipleletters[multipleletterskey];
    offsetsindex = 0;
    while (offsetsindex < offsets.length) {
      if (offsetsindex === 0) {
        minoffset = 0;
      } else {
        minoffset = offsets[offsetsindex - 1] + 1;
      }
      offsetsindex++;
      if (offsetsindex === offsets.length) {
        maxoffset = lengthofstring;
      } else {
        maxoffset = offsets[offsetsindex] - 1;
      }
      // possiblelengths["" + minoffset + maxoffset] = {
      // comment for jed
      // TODO here check if valid, as dont check current multipleletterskey
      possiblelengths[possiblelengthskey++] = {
        min: minoffset,
        max: maxoffset,
        len: maxoffset - minoffset + 1
      };
    }
  }
  return possiblelengths;
};

const getmultipleletters = (inputString: string) => {
  const singleletters: SingleLetters = {};
  const multipleletters: MultipleLetters = {};

  for (let i = 0; i < inputString.length; i++) {
    if (multipleletters.hasOwnProperty(inputString[i])) {
      multipleletters[inputString[i]].push(i);
    } else {
      if (singleletters.hasOwnProperty(inputString[i])) {
        multipleletters[inputString[i]] = singleletters[inputString[i][0]];
        delete singleletters[inputString[i]];
        multipleletters[inputString[i]].push(i);
      } else {
        singleletters[inputString[i]] = [i];
      }
    }
  }
  return multipleletters;
};

const longestSubstring = (inputString: string) => {
  console.log(inputString, " : ", typeof inputString);
  if ((typeof inputString === "string") === false) {
    inputString += "";
  }
  const lengthofstring = inputString.length - 1;

  const multipleletters = getmultipleletters(inputString);

  const possiblelengths = getpossiblelengths(
    multipleletters,
    inputString.length - 1
  );

  console.log(multipleletters);
  console.log("possiblelengths < \n", possiblelengths, "\n  >");

  return lengthofstring;
};

export default longestSubstring;
