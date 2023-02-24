function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } 
    let func = fn.bind(this, ...args);
    return curry(func)
  }
}
