import React, { Component } from 'react';
import './Palette.css';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import colorState from '../colorState';
import todoState from '../todoState';

// class Color extends Component {
// 	shouldComponentUpdate(nextProps, nextState) {
// 		return this.props.active !== nextProps.active;
// 	}

// 	render() {
// 		console.log(`rerendering Palette `);
// 		const { color, active, onClick } = this.props;

// 		return (
// 			<div
// 				className={`color ${active && 'active'}`}
// 				style={{ background: color }}
// 				onClick={() => onClick(color)}
// 			></div>
// 		);
// 	}
// }

function Color({ color, active }) {
	const [colors, setColors] = useRecoilState(colorState);

	const onSelect = color => {
		const setColorData = { ...colors, color: color };
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
// class Palette extends Component {
// 	shouldComponentUpdate(nextProps, nextState) {
// 		return this.props.selected !== nextProps.selected;
// 	}

// 	render() {
// 		console.log(`rerendering Palette `);
// 		const { colors, selected, onSelect } = this.props;

// 		return (
// 			<div className="palette">
// 				{colors.map(color => (
// 					<Color color={color} active={color === selected} onClick={onSelect} key={color} />
// 				))}
// 			</div>
// 		);
// 	}
// }

export default Palette;
