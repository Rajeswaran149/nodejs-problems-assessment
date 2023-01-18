//Problem 5 - String Filtering

a = ["user", "passw0rd", "lett3r", "101", "developer"];

function str(a) {
  alphanumeric = 0;
  numeric = 0;
  for (let i = 0; i < a.length; i++) {
    x = a[i];
    count = 0;
    for (let j = 0; j < x.length; j++) {
      if (+x[j] || +x[j] == 0) {
        count++;
        if (x.length == count) {
          numeric++;
        }
      }
    }
    for (let j = 0; j < x.length; j++) {
      if (+x[j] || +x[j] == 0) {
        alphanumeric++;
        break;
      }
    }
  }
  let str =
    alphanumeric > numeric ? alphanumeric - numeric : numeric - alphanumeric;
  let num = numeric > alphanumeric ? numeric : numeric;

  return `Count of alphanumeric String = ${str} Count of numeric String = ${num}`;
}

result = str(a);
console.log(result);
