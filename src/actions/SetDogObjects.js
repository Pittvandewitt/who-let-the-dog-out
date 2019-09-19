import * as request from 'superagent'
import store from '../store'

function SetDogsObjects(dogData) {
  return store.dispatch({
    type: 'SET_DOG_OBJECTS',
    payload: dogData
  })
}

/* 
 * Function that initializes the global state if it's emtpy
 */
export const getDogs = () => {
  return (dispatch, getState) => {
    const dogsList = getState()
    if (dogsList.length !== 0) return

    request('https://dog.ceo/api/breeds/list/all')
      .then(data => {
        const dogsObject = data.body.message
        const allDogs = []
        Object.keys(dogsObject).map(key => {
          if (dogsObject[key].length === 0)
            return allDogs.push(key)
          else for (let i = 0; i < dogsObject[key].length; i++) {
            allDogs.push(dogsObject[key][i] + '-' + key)
          }
          return ''
        })

        const promises = allDogs.map(dog => {
          const search = dog.includes('-') ? dog.split('-')[1] + '/' + dog.split('-')[0] : dog
          return request(`https://dog.ceo/api/breed/${search}/images`)
            .then(data => ({ breed: dog, images: data.body.message }))
        })

        Promise.all(promises).then(responses => SetDogsObjects(responses))
      })
      .catch(error => {
        window.alert('An error occured while fetching data. Try reloading the page')
        console.log(error)
      })
  }
}