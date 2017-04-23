import React from 'react';

import Item from './Item.js';

const Cart = (props) => {
	const {items} = props;

	let Content;
	if (items.length) {
		Content = items.map((item) => { return <Item {...item} />; });
	} else {
		Content = <span>カートに商品がありません</span>;
	}

	return (
		<div className="Cart">
		  {Content}
		</div>
	);
};

Cart.propTypes = {
	items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

export default Cart;
