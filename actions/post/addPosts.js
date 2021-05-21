const addPosts = (data) => {
  return {
    type: 'ADD_POSTS',
    data,
  };
};

module.exports = { addPosts };
