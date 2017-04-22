import React from 'react';
import ReactDOM from 'react-dom';

import { fetchItemModel } from './util';
import App from './component/App.js';

window.addEventListener('load', () => {
	// サーバーに商品リストをリクエスト
	fetchItemModel()
		.then((res) => {
			console.log(res);
			ReactDOM.render(
				<App listItems={res.data}/>,
				document.getElementById('jsApp')
			);
    });
}, false);
