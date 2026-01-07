// Maximal Rectangle
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let ans = 0;
    let st = [];
    let right = new Array(n);
    let left = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        while (st.length && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }
        right[i] = st.length == 0 ? n : st[st.length - 1]
        st.push(i)
    }
    st = []
    for (let i = 0; i < n; i++) {
        while (st.length && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }
        left[i] = st.length == 0 ? -1 : st[st.length - 1]
        st.push(i)
    }

    for (let i = 0; i < n; i++) {
        let width = right[i] - left[i] - 1
        let currArea = heights[i] * width;
        ans = Math.max(ans, currArea);
    }
    return ans
};
var maximalRectangle = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let maxArea = 0;
    let prefixMatrix = Array.from({ length: n }, () => Array(m).fill(0));
    for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (matrix[i][j] === '1') {
                sum += 1;
            } else {
                sum = 0;
            }
            prefixMatrix[i][j] = sum;
            // sum += Number(matrix[i][j]);
            // if (matrix[i][j] === '0') sum = 0;
        }
    }
    for (let i = 0; i < n; i++) {
        maxArea = Math.max(maxArea, largestRectangleArea(prefixMatrix[i]))
    }
    return maxArea;

};

