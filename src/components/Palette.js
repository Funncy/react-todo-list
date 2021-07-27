import React, { Component } from 'react';
import './Palette.css';

class Color extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.active !== nextProps.active;
	}

	render() {
		console.log(`rerendering Palette `);
		const { color, active, onClick } = this.props;

		return (
			<div
				className={`color ${active && 'active'}`}
				style={{ background: color }}
				onClick={() => onClick(color)}
			></div>
		);
	}
}

class Palette extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.selected !== nextProps.selected;
	}

	render() {
		console.log(`rerendering Palette `);
		const { colors, selected, onSelect } = this.props;

		return (
			<div className="palette">
				{colors.map(color => (
					<Color color={color} active={color === selected} onClick={onSelect} key={color} />
				))}
			</div>
		);
	}
}

export default Palette;
