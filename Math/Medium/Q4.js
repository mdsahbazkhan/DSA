//Prime Factor

//Brute
// function printPrimeFactors(n) {
//   let i = 2;

//   while (n > 1) {
//     if (n % i === 0) {
//       console.log(i);
//       n = n / i;
//     } else {
//       i++;
//     }
//   }
// }

// printPrimeFactors(36);

//Optimal

// function primeFactors(n) {
//   for (let i = 2; i * i <= n; i++) {
//     while (n % i === 0) {
//       console.log(i);
//       n = n / i;
//     }
//   }
//   if (n > 1) console.log(n);
// }

// primeFactors(36);

// largest prime factor

// class Solution {
//   largestPrimeFactor(n) {
//     let Largest = -Infinity;
//     for (let i = 2; i * i <= n; i++) {
//       while (n % i == 0) {
//         Largest = Math.max(i, Largest);
//         n = n / i;
//       }
//     }
//     if (n > 1) Largest = Math.max(n, Largest);
//     return Largest;
//   }
// }


