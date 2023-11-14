/**
 * @param {number} num
 */
function sum(num) {
    let value = num;
    const fn = (arg) => {
      return sum(value + arg);
    }
  
    fn.valueOf = () => num;
  
    return fn;
  }
  
  const sum1 = sum(1);
  console.log(sum1(2) == 3);
  // console.log(sum(1)(2)(3) == 6);
  

  function sum(a) {
    const fn = (b) => sum(a + b);
    fn[Symbol.toPrimitive] = () => a;
    return fn;
  }

