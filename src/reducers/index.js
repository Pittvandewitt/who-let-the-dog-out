export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_DOG_OBJECTS':
      return action.payload
    default:
      return state
  }
}