//Prime Factorization using Sieve


function primeFactorisation(n) {
  let spf = buildSPF(n);

  let factors = [];

  while (n !== 1) {
    factors.push(spf[n]);
    n = Math.floor(n / spf[n]);
  }

  return factors;
}

// Helper function
function buildSPF(n) {
  let spf = new Array(n + 1);

  for (let i = 1; i <= n; i++) {
    spf[i] = i;
  }

  for (let i = 2; i * i <= n; i++) {
    if (spf[i] === i) {
      for (let j = i * i; j <= n; j += i) {
        if (spf[j] === j) {
          spf[j] = i;
        }
      }
    }
  }

  return spf;
}

// Example
console.log(primeFactorisation(36));
// Output: [2, 2, 3, 3]
