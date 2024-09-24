export default {
  setInput({ commit }, value) {
    commit('SET_INPUT', value)
  },
  calculateResult({ commit }) {
    commit('CALCULATE_RESULT')
  },
  clear({ commit }) {
    commit('CLEAR')
  },

  addTodo({ commit }, todo) {
    commit('ADD_TODO', todo)
  },
  removeTodo({ commit }, index) {
    commit('REMOVE_TODO', index)
  },
  addItem({ commit }, item) {
    commit('ADD_ITEM', item)
  },
  removeItem({ commit }, index) {
    commit('REMOVE_ITEM', index)
  },
  editItem({ commit }, { index, item }) {
    commit('EDIT_ITEM', { index, item })
  },
  answerQuestion({ commit, state }, option) {
    if (option === state.questions[state.currentQuestionIndex].answer) {
      commit('incrementScore')
    }
    commit('nextQuestion')
  },
  resetQuiz({ commit }) {
    commit('resetQuiz')
  }
}
