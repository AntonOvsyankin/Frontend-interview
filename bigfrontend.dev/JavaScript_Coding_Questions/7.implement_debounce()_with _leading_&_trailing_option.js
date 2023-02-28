function debounce(func, wait, option = {leading: false, trailing: true}) {
    let timer = null;
    return function wrap() {
      let isInvoked = false;
      const call = () => {func.apply(this, arguments)};
  
      if (timer === null && option.leading) {
        call();
        isInvoked = true;
      }
  
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (option.trailing && !isInvoked) {
          call();
        }
        timer = null;
      }, wait);
    }
  }
  
  
  