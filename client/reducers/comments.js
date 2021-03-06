function comments(state = [], action) {
  if (typeof action.postId !== undefined) {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId] : postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments;

// reducer composition
function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT' :
    return [...state,{
      user: action.author,
      text: action.comment
    }];
    case 'REMOVE_COMMENT' :
      console.log('removing comment at index', state,action)
      // we need to return the array without the deleted comment
      return [...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      return state;
    default:
      return state;
  }
  return state
}
