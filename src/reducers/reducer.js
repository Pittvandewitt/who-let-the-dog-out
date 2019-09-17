

export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_DOGSLIST':
      return [...state, ...action.payload]
    default:
      return state
  }
}