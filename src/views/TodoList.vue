<template>
  <div class="todo-app">
    <h1>Todo List</h1>
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button @click="handleAddTodo">Add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }} <button @click="handleRemoveTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo']),
    handleAddTodo() {
      if (this.newTodo) {
        this.addTodo(this.newTodo) // Call the Vuex action
        this.newTodo = '' // Clear the input
      }
    },
    handleRemoveTodo(index) {
      this.removeTodo(index) // Call the Vuex action with the index
    }
  }
}
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}
</style>
