import React from 'react';
import './Palette.css';
import { useRecoilValue, useRecoilState } from 'recoil';
import colorState from '../colorState';

function Color({ color, active }) {
	const [colors, setColors] = useRecoilState(colorState);

	const onSelect = color => {
		setColors({ ...colors, color: color });
	};

	return (
		<div
			className={`color ${active && 'active'}`}
			style={{ background: color }}
			onClick={() => onSelect(color)}
		></div>
	);
}

function Palette() {
	const colors = useRecoilValue(colorState);

	return (
		<div className="palette">
			{colors.colorList.map(color => (
				<Color color={color} active={color === colors.color} key={color} />
			))}
		</div>
	);
}

export default Palette;
