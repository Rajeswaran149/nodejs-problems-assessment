//Problem 3 - Divisibility Cases

const div = (x, y) => {
  let o1 = [];
  let o2 = [];
  let o3 = [];
  let o4 = [];
  for (let i = x; i <= y; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      o1.push(i);
    }
    if (i % 3 == 0 && i % 5 == 0) {
      o2.push(i);
    }
    if (i % 3 == 0 && i % 5 !== 0) {
      o3.push(i);
    }
    if (i % 3 !== 0 && i % 5 == 0) {
      o4.push(i);
    }
  }
  final = [o1, o2, o3, o4];
  return final;
};
console.log(div(3, 25));
