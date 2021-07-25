import React, { Component } from 'react';
import './Form.css';
import './Palette.css';
import './TodoItem.css';
import './TodoListTemplate.css';

class App extends Component {
	id = 3;

	colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

	state = {
		input: '',
		todos: [
			{ id: 0, text: ' 리액트 소개', checked: false, color: '#343a40' },
			{ id: 1, text: ' 리액트 소개', checked: true, color: '#f03e3e' },
			{ id: 2, text: ' 리액트 소개', checked: false, color: '#f03e3e' },
		],
		color: '#343a40',
	};

	handleChangeColor = color => {
		this.setState({
			color: color,
		});
	};

	handleChange = e => {
		this.setState({
			input: e.target.value,
		});
	};

	handleCreate = () => {
		const { input, todos, color } = this.state;
		this.setState({
			input: '',
			todos: todos.concat({
				id: this.id++,
				text: input,
				checked: false,
				color: color,
			}),
		});
	};

	handleKeyPress = e => {
		if (e.key === 'Enter') {
			this.handleCreate();
		}
	};

	handleToggle = id => {
		const { todos } = this.state;

		const index = todos.findIndex(todo => todo.id === id);
		const selected = todos[index];

		const nextTodos = [...todos];

		nextTodos[index] = {
			...selected,
			checked: !selected.checked,
		};

		this.setState({
			todos: nextTodos,
		});
	};

	handleRemove = id => {
		const { todos } = this.state;
		this.setState({
			todos: todos.filter(todo => todo.id !== id),
		});
	};

	render() {
		const { input, todos, selectedColor } = this.state;
		const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;

		return (
			<main className="todo-list-template">
				<div className="title">오늘 할 일</div>
				<section className="form-wrapper">
					<div className="form">
						<input value={input} onChange={handleChange} onKeyPress={handleKeyPress} />
						<div className="create-button" onClick={handleCreate}>
							추가
						</div>
					</div>
				</section>
				<section className="todos-wrapper">
					<div className="palette">
						{this.colors.map(color => (
							<div
								className={`color ${color === selectedColor && 'active'}`}
								style={{ background: color }}
								onClick={() => this.handleChangeColor(color)}
							></div>
						))}
					</div>
					<div>
						{todos.map(({ id, text, checked, color }) => (
							<div className="todo-item" onClick={() => handleToggle(id)}>
								<div
									className="remove"
									onClick={e => {
										e.stopPropagation(); //onToggle 실행 방지
										handleRemove(id);
									}}
								>
									&times;
								</div>
								<div className={`todo-text ${checked && 'checked'}`}>
									<div style={{ color: color }}>{text}</div>
								</div>
								{checked && <div className="check-mart">✓</div>}
							</div>
						))}
					</div>
				</section>
			</main>
		);
	}
}

export default App;
