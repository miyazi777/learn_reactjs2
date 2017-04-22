import React from 'react';

import Cart from './Cart.js';
import ItemList from './ItemList.js';

const Container = () => {
	return (
    <main className="Container">
      <div className="ItemListArea Container__flex">
			  <h2>商品一覧 / 品数 : 5</h2>
				<ItemList/>
			</div>

			<div className="CartArea">
			  <h4>カート</h4>
				<Cart/>
				<div className="Total">
				  計2点
					<span className="Total__price">1600円</span>
				</div>
			</div>
		</main>
  );
};

export default Container;
