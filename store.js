// import { createStore } from 'redux';
const { createStore } = require('redux');
const reducer = require('./reduce/reducer');
const { logIn, logOut } = require('./actions/user/log');
const { addPosts } = require('./actions/post/addPosts');

const initialState = {
  user: null,
  posts: [],
  isLoggedIn: false,
  name: null,
  address: null,
};

const store = createStore(reducer, initialState);

// made redux store
// let's dispatch

store.dispatch(
  logIn({
    user: 'YOON_YOUNG_JOO',
    isLoggedIn: true,
    name: 'YOON_YOUNG_JOO',
    address: 'hahaha@gmail.com',
  })
);
console.log('1st', store.getState());
store.dispatch(logOut());
console.log('2nd', store.getState());
store.dispatch(
  addPosts({
    posts: 'hahaha',
  })
);

console.log('3rd', store.getState());
