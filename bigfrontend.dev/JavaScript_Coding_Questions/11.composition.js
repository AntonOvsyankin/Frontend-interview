function pipe(funcs) {
	return (arg) => {
		let res = arg;
		for (let i = 0; i < funcs.length; i++) {
			res = funcs[i](res); 
		}
		return res;
	};
}