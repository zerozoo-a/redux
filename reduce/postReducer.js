const initialState = [
  {
    posts: [],
  },
];
const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return [...prevState, action.data];

    default:
      return prevState;
  }
};
module.exports = postReducer;
