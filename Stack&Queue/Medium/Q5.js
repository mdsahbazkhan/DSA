// Sum of Subarray Ranges

// function subArrayRange(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     let max = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       min = Math.min(min, arr[j]);
//       max = Math.max(max, arr[j]);
//       sum += max - min;
//     }
//   }
//   return sum;
// }

// console.log(subArrayRange([4, -2, -3, 4, 1]));

//Optimal
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    return sumSubarrayMaxs(nums)-sumSubarrayMins(nums)
    
};

var sumSubarrayMaxs = function (arr) {
    let n = arr.length;
    let PGL = getPGL(arr, n);
    let NGR = getNGR(arr, n);
    let sum = 0
  
    for (let i = 0; i < n; i++) {
        let ls = i - PGL[i]
        let rs = NGR[i] - i;
        let totalWays = ls * rs;//no of sub array
        let totalSum = totalWays * arr[i]
        sum = (sum + totalSum) 
    }
    return sum
};
function getPGL(arr, n) {
    let result = new Array(n).fill(-1);
    let st = [];
    for (let i = 0; i < n; i++) {
        if (st.length == 0) {
            result[i] = -1;
        } else {
            while (st.length && arr[st[st.length - 1]] <= arr[i]) {
                st.pop();
            }
            result[i] = st.length === 0 ? -1 : st[st.length - 1];
        }
        st.push(i)
    }
    return result;
}
function getNGR(arr, n) {
    let result = new Array(n).fill(-1);
    let st = [];
    for (let i = n - 1; i >= 0; i--) {
        if (st.length == 0) {
            result[i] = n;
        } else {
            while (st.length && arr[st[st.length - 1]] < arr[i]) {
                st.pop();
            }
            result[i] = st.length === 0 ? n : st[st.length - 1];
        }
        st.push(i)
    }
    return result;

}

var sumSubarrayMins = function (arr) {
    let n = arr.length;
    let NSL = getNSL(arr, n);
    let NSR = getNSR(arr, n);
    let sum = 0
  
    for (let i = 0; i < n; i++) {
        let ls = i - NSL[i]
        let rs = NSR[i] - i;
        let totalWays = ls * rs;//no of sub array
        let totalSum = totalWays * arr[i]
        sum = (sum + totalSum) 
    }
    return sum
};
function getNSL(arr, n) {
    let result = new Array(n).fill(-1);
    let st = [];
    for (let i = 0; i < n; i++) {
        if (st.length == 0) {
            result[i] = -1;
        } else {
            while (st.length && arr[st[st.length - 1]] >= arr[i]) {
                st.pop();
            }
            result[i] = st.length === 0 ? -1 : st[st.length - 1];
        }
        st.push(i)
    }
    return result;
}
function getNSR(arr, n) {
    let result = new Array(n).fill(-1);
    let st = [];
    for (let i = n - 1; i >= 0; i--) {
        if (st.length == 0) {
            result[i] = n;
        } else {
            while (st.length && arr[st[st.length - 1]] > arr[i]) {
                st.pop();
            }
            result[i] = st.length === 0 ? n : st[st.length - 1];
        }
        st.push(i)
    }
    return result;

}
