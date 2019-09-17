export default function SetDogsImages(breedImages, breed) {
  return {
    type: 'SET_DOG_IMAGES',
    payload: breedImages,
    breed: breed
  }
}