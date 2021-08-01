import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
import { RecoilRoot } from 'recoil';

class App extends Component {
	// colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

	render() {
		return (
			<RecoilRoot>
				<TodoListTemplate form={<Form />}>
					<Palette />
					<TodoItemList />
				</TodoListTemplate>
				{/* <Counter /> */}
			</RecoilRoot>
		);
	}
}

export default App;
