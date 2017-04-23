const DATA = [
  {
		title: 'HTMLの本',
		author: '著者A',
		desc: 'HTMLの説明',
		price: 800
	},
	{
		title: 'JavaScriptの本',
		author: '著者B',
		desc: 'JavaScriptの説明',
		price: 1200
	}
];

export function fetchItemModel() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ status: 200, data: DATA });
		}, 1000);
	});
}
