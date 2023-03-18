const exercise1 = document.getElementById("exercise-1");
const exercise2 = document.getElementById("exercise-2");
const exercise3 = document.getElementById("exercise-3");

console.log(exercise1);
console.log(exercise2);
console.log(exercise3);

const triangle = (hash = "#", param) => {
  for (let i = 0; i < 7; i++) {
    exercise1.innerHTML += `${param}<br />`;
    param += hash;
  }
};
triangle("#", "#");

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) exercise2.innerHTML += `fizzbuzz<br />`;
    if (i % 3 === 0) exercise2.innerHTML += `fizz<br />`;
    if (i % 5 === 0) {
      exercise2.innerHTML += `buzz<br />`;
    } else {
      exercise2.innerHTML += `${i}<br />`;
    }
  }
};
fizzBuzz();

const chessBoard = (num) => {
  let board = [];
  for (let i = 0; i < num; i++) {
    board.push([]);
  }
  for (let i = 0; i < num; i++) {
    let currentRow = board[i];
    for (let j = 0; j < num; j++) {
      if (j % 2 === 0 && i % 2 !== 0) currentRow.push(" ");
      if (j % 2 === 0 && i % 2 === 0) currentRow.push("#");
      if (j % 2 !== 0 && i % 2 !== 0) currentRow.push("#");
      if (j % 2 !== 0 && i % 2 === 0) currentRow.push(" ");
    }
  }
  board.map((currentRow) => {
    console.log(...currentRow);
    exercise3.innerHTML += `${currentRow.join("")}<br />`;
  });
};
chessBoard(8);
