import { atom, useRecoilState } from 'recoil';
import counter from './count';

function Counter() {
	const [count, setCount] = useRecoilState(counter);
	const incrementByOne = () => setCount(count + 1);

	return (
		<div>
			Count: {count}
			<br />
			<button onClick={incrementByOne}>Increment</button>
		</div>
	);
}

export default Counter;
