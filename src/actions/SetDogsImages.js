export default function SetDogsImages(breedImages) {
  return {
    type: 'SET_DOG_IMAGES',
    payload: breedImages.url
  }
}