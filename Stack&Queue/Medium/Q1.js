//Brute

// var MinStack = function() {
//     this.stack=[];

// };

// MinStack.prototype.push = function(val) {
//     if(this.stack.length===0){
//         this.stack.push([val,val])
//     }else{
//         let currentMin=this.stack[this.stack.length-1][1];
//         this.stack.push([val,Math.min(currentMin,val)]);
//     }

// };

// MinStack.prototype.pop = function() {
//     this.stack.pop();

// };

// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length-1][0]
// };

// MinStack.prototype.getMin = function() {
//      return this.stack[this.stack.length-1][1]
// };

//Optimal

var MinStack = function () {
  this.stack = [];
  this.minVal = null;
};

MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push(val);
    this.minVal = val;
  } else if (val >= this.minVal) {
    this.stack.push(val);
  } else {
    this.stack.push(2 * val - this.minVal);
    this.minVal = val;
  }
};

MinStack.prototype.pop = function () {
  let top = this.stack.pop();
  if (top < this.minVal) {
    this.minVal = 2 * this.minVal - top;
  }
};

MinStack.prototype.top = function () {
  let top = this.stack[this.stack.length - 1];
  if (top < this.minVal) {
    return this.minVal;
  }
  return top;
};

MinStack.prototype.getMin = function () {
  return this.minVal;
};
