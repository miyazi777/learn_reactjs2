import React from 'react';

const Item = () => {
	return (
    <div className="Item">
		  <h3 className="Item__title">商品１</h3>
			<span className="Item__auth">xxxx</span>
			<p className="Item__desc">商品説明1</p>
			<p className="Item__price">800円</p>
			<div className="Item__btnWrap">
			  <button type="button" className="Btn">カートへ</button>
			</div>
		</div>
  );
}

export default Item;
