//Problem 4 - Shortest Distance of Manhattan Path

a = [
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0],
    [7, 0],
    [8, 0],
    [9, 0],
    [10, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 1],
    [10, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
    [9, 2],
    [10, 2],
  ],
  [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [9, 3],
    [10, 3],
  ],
  [
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [10, 4],
  ],
  [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 5],
    [9, 5],
    [10, 5],
  ],
  [
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
    [6, 6],
    [7, 6],
    [8, 6],
    [9, 6],
    [10, 6],
  ],
  [
    [0, 7],
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
    [5, 7],
    [6, 7],
    [7, 7],
    [8, 7],
    [9, 7],
    [10, 7],
  ],
  [
    [0, 8],
    [1, 8],
    [2, 8],
    [3, 8],
    [4, 8],
    [5, 8],
    [6, 8],
    [7, 8],
    [8, 8],
    [9, 8],
    [10, 8],
  ],
  [
    [0, 9],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
    [10, 9],
  ],
  [
    [0, 10],
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],
    [8, 10],
    [9, 10],
    [10, 10],
  ],
];

function findroute(x, y) {
  m = y;

  search = x;

  curr = [];
  fin = [];
  index = search[1];
  east = search[0];
  west = search[0];
  for (let i = 0; i < m.length; i++) {
    if (m[i] == "N") {
      index++;
      //  console.log(index,"index")
      curr = a[index];
      fin = curr[search[0]];
    }
    if (m[i] == "E") {
      curr = a[index];
      east++;
      fin = curr[east];
    }
    if (m[i] == "W") {
      curr = a[index];
      west = east - 1;
      east--;
      //  console.log(east,west,"ew")
      fin = curr[west];
    }
    if (m[i] == "S") {
      south = index - 1;
      index--;
      // index-1
      // console.log(index,south,"south")

      curr = a[south];
      fin = curr[east];
    }

    ans = Math.sqrt(fin[0] ** 2 + fin[1] ** 2);
  }
  if (ans) {
    if (search[0] == fin[0] && search[1] == fin[1]) {
      return 0;
    } else {
      return ans;
    }
  } else {
    return "wrong route";
  }
}
answer = findroute([5, 5], "NS");

console.log(answer);
