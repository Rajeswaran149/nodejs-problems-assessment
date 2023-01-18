function greater(a, b) {
  input_1 = [...a];
  input_2 = [...b];
  var aa = [];
  var bb = [];
  for (let i = 0; i < input_1.length; i++) {
    if (input_1[i] < input_2[i]) {
      aa.push(input_2[i]);
      bb.push(input_1[i]);
    } else {
      aa.push(input_1[i]);
      bb.push(input_2[i]);
    }
  }
  greats = aa.sort((a, b) => b - a);
  great1 = bb.sort((a, b) => b - a);

  return greats[0] * great1[0];
  //return [[...aa],[...bb]]
}
result = greater(
  [1, 2, 3, 2, 3, 4, 5, 3, 5, 6, 7, 8],
  [2, 1, 5, 3, 4, 6, 4, 3, 2, 3, 1, 2]
);

console.log(result);
