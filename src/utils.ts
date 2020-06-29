export const dateStringToDate = (dateString: string): Date => {
	// 28/10/2018
	const dateParts = dateString.split('/'); // ['28', '10', '2018']
	const parsedDate = dateParts.map((val: string): number => {
		return parseInt(val, 10); // [28, 10, 2018]
	});
	// new Date(yyyy, m-1, d)
	return new Date(parsedDate[2], parsedDate[1] - 1, parsedDate[0]);
};
