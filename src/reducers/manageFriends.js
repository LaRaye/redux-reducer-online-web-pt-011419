let state = {friends: []};

export function manageFriends(state, action1, action2){
  switch (action.type) {
    case 'ADD_FRIEND':
      return [...state.friends, action.friend]
    default:
      return state;
  }
}
