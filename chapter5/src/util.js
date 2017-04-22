const DATA = [
  {}, {}
];

export function fetchItemModel() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ data: DATA });
		}, 1000);
	});
}
