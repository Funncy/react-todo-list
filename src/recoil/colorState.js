import { atom } from 'recoil';

const colorState = atom({
	key: 'colorState',
	default: {
		color: '#343a40',
		colorList: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
	},
});

export default colorState;
