export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const getRandomDogObject = (content, count) => {
  const shuffledContent = shuffle([...content])
  return shuffledContent.slice(0, count)
}

export const calculateScore = (wrongAnswers, correctAnswers) => {
  return wrongAnswers === 0 && correctAnswers === 0 ? '0%' :
    `${Math.round(correctAnswers / (wrongAnswers + correctAnswers) * 100)}%`
}