export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_DOGSLIST':
      return [...state, ...action.payload]
        .map(breed => { return { breed } })
    case 'SET_DOG_IMAGES':
      const breed = [...state].find(dogObject => action.breed === dogObject.breed)
      breed.images = action.payload
      return [...state]
    default:
      return state
  }
}