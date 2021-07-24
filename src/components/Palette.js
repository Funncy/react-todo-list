import React from 'react';
import './Palette.css';

const Color = ({ color, active, onClick }) => {
	return (
		<div
			className={`color ${active && 'active'}`}
			style={{ background: color }}
			onClick={() => onClick(color)}
		></div>
	);
};

function Palette({ colors, selected, onSelect }) {
	return (
		<div className="palette">
			{colors.map(color => (
				<Color color={color} active={color === selected} onClick={onSelect} key={color} />
			))}
		</div>
	);
}

export default Palette;
