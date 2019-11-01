let state = {friends: []};

export function manageFriends(state, action1, action2){
  switch (action.type) {
    case 'ADD_FRIEND':
      return [...state.friends, action.friend]
    case 'REMOVE_FRIEND':
      const newFriends = [...state.friends].filter((friend) => friend.id !== action.id);
      return {friends: newFriends}
    default:
      return state;
  }
}
