// Rotate String

//brute force;
// function rotateString(s, goal) {
//   if (s.length != goal.length) return false;
//   for (let i = 0; i < s.length; i++) {
//     let rotated = s.substring(i) + s.substring(0, i);
//     if (rotated === goal) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(rotateString("rotation", "tionrote"));

function rotateString(s, goal) {
  if (s.length != goal.length) return false;
  let doubledS = s + s;
  return doubledS.includes(goal);
}
console.log(rotateString("rotation", "tionrota"));
