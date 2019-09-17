export default (state = [], action = {}) => {
  console.log(action.type)
  switch (action.type) {
    case 'SET_DOG_OBJECTS':
      return action.payload
    default:
      return state
  }
}