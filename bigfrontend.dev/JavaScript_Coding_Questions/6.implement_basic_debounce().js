function debounce(func, wait) {
    let newCall = null;
    return function() {
      const call = () => {func.apply(this, arguments)};
      clearTimeout(newCall);
      newCall = setTimeout(call, wait);
    }
}  