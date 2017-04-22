import React from 'react';

import Header from './Header.js';
import ItemList from './ItemList.js';
import Container from './Container.js';
import Footer from './Footer.js';

class App extends React.Component {
	render() {
		return (
			<div>
			  <Header/>
				<Container/>
			  <Footer/>
			</div>
		);
	}
}

export default App;
