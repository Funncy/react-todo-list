import './TodoFilter.css';
import { useRecoilState } from 'recoil';
import todoFilterState from '../recoil/todoFilterState';

function TodoFilter() {
	const [filterState, setFilterState] = useRecoilState(todoFilterState);

	function onChangeFilter(filter) {
		if (filter === filterState) return;
		switch (filter) {
			default:
				return;
			case 'All':
			case 'Completed':
			case 'Uncompleted':
				setFilterState(filter);
				break;
		}
	}

	return (
		<div className="filter">
			<div
				className={`filter_button All ${filterState === 'All' && 'active'}`}
				onClick={() => onChangeFilter('All')}
			>
				All
			</div>
			<div
				className={`filter_button All ${filterState === 'Completed' && 'active'}`}
				onClick={() => onChangeFilter('Completed')}
			>
				Completed
			</div>
			<div
				className={`filter_button All ${filterState === 'Uncompleted' && 'active'}`}
				onClick={() => onChangeFilter('Uncompleted')}
			>
				Uncompleted
			</div>
		</div>
	);
}

export default TodoFilter;
