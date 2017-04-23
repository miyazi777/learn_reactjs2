import React from 'react';

import Header from './Header.js';
import ItemList from './ItemList.js';
import Container from './Container.js';
import Footer from './Footer.js';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			cartItems: []
		};

		this._addToCart = this._addToCart.bind(this);
	}

	render() {
		const { listItems } = this.props;
		const { cartItems } = this.state;

		return (
			<div>
			  <Header/>
				<Container
				  listItems={listItems}
					cartItems={cartItems}
					addToCart={this._addToCart}
			  />
			  <Footer/>
			</div>
		);
	}

	_addToCart(item) {
		let newCartItems = this.state.cartItems.slice();
		newCartItems.push(item);
		this.setState({ cartItems: newCartItems });
	}
}

export default App;
