function throttle(func, wait) {
    let isThrottled = false;
    let lastArguments = null;
    let lastThis = null;
  
    return function() {
  
      if (isThrottled) {
        lastArguments = arguments;
        lastThis = this;
        return;
      }
  
      func.apply(this, arguments);
  
      isThrottled = true;
  
      setTimeout(() => {
        isThrottled = false;
        if (lastArguments) {
          func.apply(lastThis, lastArguments);
          lastArguments = lastThis = null;
        }
      }, wait) 
    }
  
  }