export const makeArrayFromRange = (range, positive = true) => {
  // makes an array [1, range];
  let arr = [...Array(range)].map((el, idx) => idx + 1);
  // positive [1, 2, 3]  else  [-3, -2, -1]
  return positive ? arr : arr.reverse().map((el) => -el);
};
