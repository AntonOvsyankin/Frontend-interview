function throttle(func, wait) {
    let isThrottled = false;
    let lastArguments = null;
    let lastThis = null;
  
    function wrapper() {
  
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
          wrapper.apply(lastThis, lastArguments);
          lastArguments = lastThis = null;
        }
      }, wait) 
    }

    return wrapper;
  }