//asteroidCollision

var asteroidCollision = function (asteroids) {
  let st = [];
  for (let i = 0; i < asteroids.length; i++) {
    while (st.length && st[st.length - 1] > 0 && asteroids[i] < 0) {
      let sum = asteroids[i] + st[st.length - 1];
      if (sum < 0) {
        st.pop();
      } else if (sum > 0) {
        asteroids[i] = 0;
      } else {
        st.pop();
        asteroids[i] = 0;
      }
    }
    if (asteroids[i] != 0) {
      st.push(asteroids[i]);
    }
  }
  return st;
};
console.log(asteroidCollision([-4, 3, 2, -2, 1]));
