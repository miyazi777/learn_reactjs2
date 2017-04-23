import React from 'react';

const Item = (props) => {

	const {
		title,
		author,
		desc,
		price,
		onClickBtn,
		btnLabel,
		isSimple,
	} = props;


	return (
    <div className="Item">
		  <h3 className="Item__title">{title}</h3>
			<span className="Item__auth">{author}</span>
			{isSimple ? null : <p className="Item__desc">{desc}</p>}
			<p className="Item__price">{price}円</p>
			<div className="Item__btnWrap">
			  <button
				  type="button"
					className="Btn"
					onClick={onClickBtn}>{btnLabel}</button>
			</div>
		</div>
  );
}

Item.propTypes = {
	title: React.PropTypes.string.isRequired,
	author: React.PropTypes.string.isRequired,
	desc: React.PropTypes.string.isRequired,
	price: React.PropTypes.number.isRequired,
	onClickBtn: React.PropTypes.func.isRequired,
}

export default Item;
