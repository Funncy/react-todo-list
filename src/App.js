import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
import TodoContext from './components/TodoContext';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import TodoList from './todo/TodoList';
import Counter from './todo/test';

class App extends Component {
	// colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

	render() {
		return (
			<RecoilRoot>
				<TodoListTemplate form={<Form />}>
					<TodoItemList />
				</TodoListTemplate>
				{/* <Counter /> */}
			</RecoilRoot>
		);
	}
}

export default App;
