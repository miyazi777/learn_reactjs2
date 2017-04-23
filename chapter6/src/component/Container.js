import React from 'react';

import Cart from './Cart.js';
import ItemList from './ItemList.js';

const Container = (props) => {
	const {
		listItems,
    cartItems,
		addToCart,
 	} = props;

	return (
    <main className="Container">
      <div className="ItemListArea Container__flex">
			  <h2>商品一覧 / 品数 : {listItems.length}</h2>
				<ItemList
				  items={listItems}
				  addToCart={addToCart}
			  />
			</div>

			<div className="CartArea">
			  <h4>カート</h4>
				<Cart items={cartItems}/>
				<div className="Total">
				  計0点
					<span className="Total__price">0円</span>
				</div>
			</div>
		</main>
  );
};

Container.propTypes = {
	listItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	cartItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	addToCart: React.PropTypes.func.isRequired,
}

export default Container;
