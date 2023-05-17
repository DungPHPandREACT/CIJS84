import React from 'react';

const CardProduct = (props) => {
	console.log('props: ', props.nameProduct);

	return <h1>Tên sản phẩm: {props.nameProduct}</h1>;
};

export default CardProduct;
