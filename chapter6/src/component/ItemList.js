import React from 'react';

import Item from './Item.js';

const ItemList = (props) => {
	const { items, addToCart } = props;

	return (
		<ul className="ItemList">
		  {items.map((item, idx) => {
        return (
		      <li className="ItemList__item" key={idx}>
			      <Item
						  {...item}
							btnLabel="カートに入れる"
							onClickBtn={ () => { addToCart(item); }}
						/>
			    </li>
				);
			})}
		</ul>
	);
}

ItemList.propTypes = {
	items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
	addToCart: React.PropTypes.func.isRequired,
}

export default ItemList;
