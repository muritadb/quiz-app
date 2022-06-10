const form = document.querySelector('.quiz-form')
const userScore = document.querySelector('.userScore')

let correctAnswers = ['A', 'D', 'C', 'B']
let scoreCurrent = 0
let score = 0

const handleSubmit = event => {
  event.preventDefault()

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })


  setTimeout(() => {
    scrollTo(0, 0)
  }, 1000)

  const scorecurrent = setInterval(() => {
    scoreCurrent++
    if (scoreCurrent === score) {
      clearInterval(scorecurrent)
    }
    userScore.textContent = `${scoreCurrent}%`

  }, 100)
}

form.addEventListener('submit', handleSubmit)

