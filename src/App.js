import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
import TodoContext from './components/TodoContext';

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
		const { input, todos, color } = this.state;
		const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;

		return (
			<TodoListTemplate
				form={
					<Form
						value={input}
						onKeyPress={handleKeyPress}
						onChange={handleChange}
						onCreate={handleCreate}
					/>
				}
			>
				<Palette colors={this.colors} selected={color} onSelect={this.handleChangeColor} />
				<TodoContext.Provider
					value={{ todos: todos, onToggle: handleToggle, onRemove: handleRemove }}
				>
					<TodoItemList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
				</TodoContext.Provider>
			</TodoListTemplate>
		);
	}
}

export default App;
