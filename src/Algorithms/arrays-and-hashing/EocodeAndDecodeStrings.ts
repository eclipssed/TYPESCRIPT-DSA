class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]) {
    let encodedStr = "";
    for (const str of strs) {
      encodedStr += str.length + "#" + str;
    }
    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string) {
    const decodedArr: string[] = [];
    let startingPtr = 0;

    while (startingPtr < str.length) {
      const endingPtr = str.indexOf("#", startingPtr);
      const len = parseInt(str.substring(startingPtr, endingPtr));
      const startingIdx = endingPtr + 1;
      const endingIdx = startingIdx + len;
      const originalString = str.substring(startingIdx, endingIdx);
      decodedArr.push(originalString);
      startingPtr = endingIdx;
    }
    return decodedArr;
  }
}
// [hello, world]
// 5#hello5#world
