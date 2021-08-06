import * as firebase from 'firebase';

var firebaseConfig = {
	authDomain: 'react-study-b449a.firebaseapp.com',
	databaseURL: 'https://react-study-b449a-default-rtdb.firebaseio.com',
	projectId: 'react-study-b449a',
	storageBucket: 'react-study-b449a.appspot.com',
	messagingSenderId: '74968759098',
	appId: '1:74968759098:web:d56e91a8937431afff2e03',
	measurementId: 'G-4H5YLKV9BE',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');
