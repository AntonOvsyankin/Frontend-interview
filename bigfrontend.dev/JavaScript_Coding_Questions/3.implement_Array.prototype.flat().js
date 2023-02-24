//recursion

function flat(arr, depth = 1) {
    if (depth === 0) {
      return arr;
    }
    const anwer = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        anwer.push(...flat(arr[i], depth - 1));
      } else {
        anwer.push(arr[i]);
      }
    }
    return anwer;
}

//iteration

function flat(arr, depth = 1) {
    const stack = arr.map((item) => [item, depth])
    const result = []
  
    while (stack.length > 0) {
      const [item, itemDepth] = stack.pop()
      if (Array.isArray(item) && itemDepth > 0) {
        stack.push(...item.map((arrayItem) => [arrayItem, itemDepth - 1]))
      } else {
        result.push(item)
      }
    }
    return result.reverse()
  }

const arr = [1, [2], [3, [4]]];
  
console.log(flat(arr));
// [1, 2, 3, [4]]

[1,2,[3,4],[5, [6,7]]]  // depth = 2

stack =  [3, 4, 5, [6,7]]

result = [1,2, 3, 4, 5, 6, 7]