export default {
  items: (state) => state.items,
  currentQuestion(state) {
    return state.questions[state.currentQuestionIndex]
  },
  isQuizCompleted(state) {
    return state.currentQuestionIndex >= state.questions.length
  },
  score(state) {
    return state.score
  }
}
