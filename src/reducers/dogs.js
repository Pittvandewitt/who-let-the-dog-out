// dummy data
const initialState = [
  {
    name: 'affenpinscher',
    images: ['https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg', 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg','https://images.dog.ceo/breeds/affenpinscher/n02110627_10225.jpg', 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg', 'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg']
  },
  {
    name: 'african',
    images: ['https://images.dog.ceo/breeds/african/n02116738_10024.jpg', 'https://images.dog.ceo/breeds/african/n02116738_10038.jpg', 'https://images.dog.ceo/breeds/african/n02116738_10081.jpg', 'https://images.dog.ceo/breeds/african/n02116738_10169.jpg', 'https://images.dog.ceo/breeds/african/n02116738_10215.jpg']
  },
  {
    name: 'airedale',
    images: ['https://images.dog.ceo/breeds/airedale/n02096051_1017.jpg', 'https://images.dog.ceo/breeds/airedale/n02096051_1110.jpg', 'https://images.dog.ceo/breeds/airedale/n02096051_1111.jpg', 'https://images.dog.ceo/breeds/airedale/n02096051_1121.jpg', 'https://images.dog.ceo/breeds/airedale/n02096051_1134.jpg']
  }
]

export default (state = initialState, action = {}) => {
  console.log(action.payload)

  // We need to create objects instead of pushing the payload to the array
  switch (action.type) {
    case 'SET_DOGSLIST':
      return [...state, ...action.payload].map(breed => { return { name: breed } })
    case 'SET_DOG_IMAGES':
      return [...state, action.payload]
    default:
      return state
  }
}