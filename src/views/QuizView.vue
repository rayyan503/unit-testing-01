<template>
  <div class="quiz">
    <h1>Animal Quiz</h1>
    <div v-if="!isQuizCompleted">
      <h2>{{ currentQuestion.question }}</h2>
      <ul>
        <li v-for="option in currentQuestion.options" :key="option">
          <button @click="submitAnswer(option)">{{ option }}</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>Quiz Completed!</h2>
      <p>Your score: {{ score }} out of {{ totalQuestions }}</p>
      <button @click="resetQuiz">Play Again</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['questions']),
    ...mapGetters(['currentQuestion', 'isQuizCompleted', 'score']),
    totalQuestions() {
      return this.questions.length
    }
  },
  methods: {
    ...mapActions(['answerQuestion', 'resetQuiz']),
    submitAnswer(option) {
      this.answerQuestion(option)
    }
  }
}
</script>
