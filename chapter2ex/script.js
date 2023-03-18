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
