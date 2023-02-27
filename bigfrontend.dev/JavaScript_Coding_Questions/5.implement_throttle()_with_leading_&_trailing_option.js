function throttle(func, wait, option = {leading: true, trailing: true}) {
    let isThrottled = false;
    let lastArguments = null;
    let lastThis = null;
    const {leading, trailing} = option;

    function wrapper() {
  
      if (isThrottled) {
        lastArguments = arguments;
        lastThis = this;
        return;
      }

      if (leading || (trailing && lastArguments)) { func.apply(this, arguments) }; 

      isThrottled = true;
  
      setTimeout(() => {
        isThrottled = false;
        if (lastArguments && trailing) {
          wrapper.apply(lastThis, lastArguments);
          lastArguments = lastThis = null;
        }
      }, wait) 
    }

    return wrapper;
}
