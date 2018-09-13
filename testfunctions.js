var getpossiblelengths =
function (multipleletters, lengthofstring) {
  let possiblelengths = {};
  let possiblelengthskey = 1;
  let multipleletterskey = {};
  let offsets = [];
  let offsetsindex = 0;
  let minoffset = 0;
  let maxoffset = 0;
  for (multipleletterskey in multipleletters) {
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
      //possiblelengths["" + minoffset + maxoffset] = {
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
}

var getmultipleletters =
function (inputstring) {
  let singleletters = {};
  let multipleletters = {};

  for (let i = 0; i < inputstring.length; i++) {
    if (multipleletters.hasOwnProperty(inputstring[i])) {
      multipleletters[inputstring[i]].push(i);
    } else {
      if (singleletters.hasOwnProperty(inputstring[i])) {
        multipleletters[inputstring[i]] = singleletters[inputstring[i][0]];
        delete singleletters[inputstring[i]];
        multipleletters[inputstring[i]].push(i);
      } else {
        singleletters[inputstring[i]] = [i];
      }
    }
  }
  return multipleletters;
}

function test001(inputstring) {
  console.log(inputstring, " : ", typeof inputstring);
  if ((typeof inputstring === "string") === false) {
    inputstring += "";
  }
  let lengthofstring = inputstring.length - 1;

  let multipleletters = getmultipleletters(inputstring);

  let possiblelengths = getpossiblelengths(multipleletters, inputstring.length - 1);

  console.log(multipleletters);
  console.log("possiblelengths < \n", possiblelengths, "\n  >");

  return lengthofstring;
}

module.exports.test001 = test001;
