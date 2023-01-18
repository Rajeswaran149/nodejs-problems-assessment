//Problem 6 - Password Validation
function pass(a) {
  test1 = false;
  test2 = false;
  test3 = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
      test1 = true;
    }
    if (
      a[i] == "!" ||
      a[i] == "@" ||
      a[i] == "#" ||
      a[i] == "&" ||
      a[i] == "*" ||
      a[i] == "$"
    ) {
      test2 = true;
    }
    if (+a[i]) {
      test3 = true;
    }
  }
  if (test1 && test2 && test3) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
let input = "Test@123";
ans = pass(input);

console.log(ans);
