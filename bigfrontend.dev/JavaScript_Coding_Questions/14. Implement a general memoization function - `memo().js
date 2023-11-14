function memo(func, resolver) {
    let cache = new Map();
  
    return function(...args) {
      const funcArgs = resolver ? resolver(...args) : JSON.stringify(args);
      if (cache.has(funcArgs)) {
        return cache.get(funcArgs);
      }
  
      const res = func.apply(this, args);
      cache.set(funcArgs, res);
      return res;    
    }
  }
  
  