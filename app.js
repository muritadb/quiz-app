const form = document.querySelector('.quiz-form')
const pontuacao = document.querySelector('.pontuacao')

const correctAnswers = ['C', 'B', 'B', 'D']
let counter = 0

const handleForm = event => {
  event.preventDefault()
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]
  let score = 0
  const checkAnswers = (userAnswer, index) => {
    const iscorrectAnswer = userAnswer === correctAnswers[index]
    if (iscorrectAnswer) {
      score += 25
    }
  }
  userAnswers.forEach(checkAnswers)
  pontuacao.classList.remove('d-none')

  const setScoreIntoInterval = () => {
    scrollTo(0, 0)
    const setScoreIntoH2 = () => {
      pontuacao.querySelector('span').textContent = `${counter}%`

      const totalScore = counter === score
      if (totalScore) {
        clearInterval(timer)
      }
      counter++
    }
    const timer = setInterval(setScoreIntoH2, 10)
  }
  setTimeout(setScoreIntoInterval, 1000)
}

form.addEventListener('submit', handleForm)