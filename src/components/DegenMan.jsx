// src/components/DegenMan.jsx
import React from 'react';
import './DegenMan.css';

// Мы будем получать позицию героя (x, y) "сверху"
const DegenMan = ({ position }) => {
	// Стили, которые мы будем применять к нашему герою,
	// чтобы разместить его в нужной клетке сетки.
	const style = {
		gridColumnStart: position.x,
		gridRowStart: position.y,
	};

	return (
		<div className="degen-man" style={style}>
			<div className="face">-_-</div>
		</div>
	);
};

export default DegenMan;