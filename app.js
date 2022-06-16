const form = document.querySelector('form')

const correctAnswers = ['B', 'B', 'B', 'B']


form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  let score = 0

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }

  })
  console.log(score)
})
