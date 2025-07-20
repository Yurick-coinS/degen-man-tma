// src/components/Maze.jsx
import React from 'react';
import './Maze.css';

// props.children — это специальная штука в React,
// которая позволяет нам вставить что-угодно ВНУТРЬ этого компонента.
// В нашем случае мы будем вставлять сюда Degen-Man'а и призраков.
const Maze = ({ children }) => {
	return (
		<div className="maze-container">
			<div className="maze-grid">
				{children}
			</div>
		</div>
	);
};

export default Maze;