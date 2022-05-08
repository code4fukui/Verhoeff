const d = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], 
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], 
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], 
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], 
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], 
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], 
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], 
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], 
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];
const p = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], 
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], 
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], 
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], 
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], 
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], 
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];
const j = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

const calc = (num) => {
  const s = num.toString();
  let c = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const n = parseInt(s[i]);
    const idx = s.length - i;
    c = d[c][p[idx & 7][n]];
  }
  return j[c];
};

const check = (num) => {
  const s = num.toString();
  return calc(s.substring(0, s.length - 1)) == s[s.length - 1];
};

const addCheckDigit = (num) => {
  if (typeof num == "string") {
    return num + calc(num);
  }
  return num * 10 + calc(num);
};

export const Verhoeff = { calc, check, addCheckDigit };
