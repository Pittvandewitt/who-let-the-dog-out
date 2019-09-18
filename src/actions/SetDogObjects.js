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
        const promises = Object.keys(data.body.message).map(dog => {
          return request(`https://dog.ceo/api/breed/${encodeURIComponent(dog)}/images`)
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