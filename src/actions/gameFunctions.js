const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const getRandomDogObject = (content, count) => {
  const shuffledContent = shuffle([...content])
  return shuffledContent.slice(0, count)
}

module.exports = {
  shuffle,
  getRandomDogObject
}