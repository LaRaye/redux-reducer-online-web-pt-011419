let state = {friends: []};

export function manageFriends(state, action1, action2){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
