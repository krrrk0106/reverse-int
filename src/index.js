module.exports = function reverse (n) {
    let toString = Math.abs(n).toString();
    let i = (toString.length - 1);
    let reverseNum = '';
    while (i >= 0) {
      reverseNum = reverseNum + toString[i];
      i--;
    }
    return reverseNum;
}
