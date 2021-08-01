import { atom, selector } from 'recoil';
import colorState from './colorState';

const todoState = atom({
	key: 'todoState',
	default: [],
});

export default todoState;
