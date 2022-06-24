const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const labels = document.querySelector('label')

let score = 0

const correctAnswers = ['C', 'B', 'B', 'D']

const getUserAnswers = () => correctAnswers.map((_, index) =>
  form[`inputQuestion${index + 1}`].value)


const calculateUserScore = userAnswers => {
  const checkAnswers = (userAnswer, index) => {
    const iscorrectAnswer = userAnswer === correctAnswers[index]
    if (iscorrectAnswer) {
      score += 25
    }
  }
  userAnswers.forEach(checkAnswers)
}

const showScore = () => {
  finalScoreContainer.classList.remove('d-none')
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

const animateUserScore = () => {
  let counter = 0

  const timer = setInterval(() => {

    const totalScore = counter === score
    if (totalScore) {
      clearInterval(timer)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 50)
}

const resetUserSocre = () => {
  score = 0
}

const handleForm = event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  resetUserSocre()
  calculateUserScore(userAnswers)
  showScore()
  animateUserScore()
}

form.addEventListener('submit', handleForm)