export default {
  SET_INPUT(state, payload) {
    state.input = payload
  },
  CALCULATE_RESULT(state) {
    try {
      // Menggunakan fungsi eval() untuk menghitung ekspresi
      state.result = eval(state.input)
    } catch (e) {
      state.result = 'Error'
    }
  },
  CLEAR(state) {
    state.input = ''
    state.result = 0
  },

  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  REMOVE_TODO(state, index) {
    state.todos.splice(index, 1)
  },
  ADD_ITEM(state, item) {
    state.items.push(item)
  },
  REMOVE_ITEM(state, index) {
    state.items.splice(index, 1)
  },
  EDIT_ITEM(state, { index, item }) {
    state.items[index] = item
  }
}
