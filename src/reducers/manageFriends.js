let state = {friends: []};

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return [...state.friends, action.friend];
    case 'REMOVE_FRIEND':
      const newState = {...state};
      newState.friends = newState.friends.filter(friend => friend.id !== action.id);
      return newState.friends;
    default:
      return state;
  }
}
