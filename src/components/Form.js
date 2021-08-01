import React, { useState } from 'react';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import './Form.css';
import todoState from '../todoState';
import colorState from '../colorState';

function Form() {
	const [inputValue, setInputValue] = useState('');
	// const setTodoList = useSetRecoilState(todoState);
	const [todoList, setTodoList] = useRecoilState(todoState);
	const color = useRecoilValue(colorState);

	const addItem = () => {
		console.log(todoList);
		setTodoList(oldTodoList => [
			...oldTodoList,
			{
				id: getId(),
				text: inputValue,
				checked: false,
				color: color.color,
			},
		]);
		console.log(todoList);
		setInputValue('');
	};

	const onChange = ({ target: { value } }) => {
		setInputValue(value);
	};

	const keyPress = e => {
		if (e.key === 'Enter') {
			addItem();
		}
	};

	return (
		<div className="form">
			<input value={inputValue} onChange={onChange} onKeyPress={keyPress} />
			<div className="create-button" onClick={addItem}>
				추가
			</div>
		</div>
	);
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
	return id++;
}

// class Form extends Component {
// 	shouldComponentUpdate(nextProps, nextState) {
// 		return this.props.value !== nextProps.value;
// 	}

// 	render() {
// 		const { value, onChange, onCreate, onKeyPress } = this.props;
// 		console.log(`rerendering Form `);

// 		return (
// 			<div className="form">
// 				<input value={value} onChange={onChange} onKeyPress={onKeyPress} />
// 				<div className="create-button" onClick={onCreate}>
// 					추가
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default Form;
