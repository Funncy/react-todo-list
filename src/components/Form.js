import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.value !== nextProps.value;
	}

	render() {
		const { value, onChange, onCreate, onKeyPress } = this.props;
		console.log(`rerendering Form `);

		return (
			<div className="form">
				<input value={value} onChange={onChange} onKeyPress={onKeyPress} />
				<div className="create-button" onClick={onCreate}>
					추가
				</div>
			</div>
		);
	}
}

export default Form;
