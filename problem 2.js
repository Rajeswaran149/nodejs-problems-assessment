//Problem 2 - Possible Three Letter String

let input = ["a", "b", "c"];

create = (input) => {
  len = input.length * input.length;
  //console.log(len)
  final = [];
  for (let i = 0; i < input.length; i++) {
    var count = -1;
    let x = 0;
    let y = -1;

    for (let j = 0; j < len; j++) {
      var emp = [];
      count++;
      y++;
      emp.push(`${input[i]}`);

      if (count == input.length) {
        count = 0;
        x++;
      }
      emp.push(input[x]);
      if (y == input.length) {
        y = 0;
      }

      emp.push(input[y]);

      final.push(emp.join(""));
    }
  }
  return final.sort();
};
final = create(input);
console.log(final);
