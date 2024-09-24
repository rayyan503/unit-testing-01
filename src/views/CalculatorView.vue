<template>
  <div class="calculator">
    <input v-model="input" class="calculator-input" placeholder="0" readonly />
    <div class="calculator-buttons">
      <button @click="appendToInput('1')">1</button>
      <button @click="appendToInput('2')">2</button>
      <button @click="appendToInput('3')">3</button>
      <button @click="appendToInput('+')">+</button>

      <button @click="appendToInput('4')">4</button>
      <button @click="appendToInput('5')">5</button>
      <button @click="appendToInput('6')">6</button>
      <button @click="appendToInput('-')">-</button>

      <button @click="appendToInput('7')">7</button>
      <button @click="appendToInput('8')">8</button>
      <button @click="appendToInput('9')">9</button>
      <button @click="appendToInput('*')">*</button>

      <button @click="appendToInput('0')">0</button>
      <button @click="clear">C</button>
      <button @click="calculate">=</button>
      <button @click="appendToInput('/')">/</button>
    </div>
    <div class="calculator-result">
      <p>Result: {{ result }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['input', 'result'])
  },
  methods: {
    ...mapActions(['setInput', 'calculateResult', 'clear']),
    appendToInput(value) {
      this.setInput(this.input + value)
    },
    calculate() {
      this.calculateResult()
    }
  }
}
</script>

<style scoped>
.calculator {
  max-width: 200px;
  margin: 50px auto;
  text-align: center;
}

.calculator-input {
  width: 100%;
  height: 50px;
  font-size: 2rem;
  text-align: right;
  margin-bottom: 10px;
}

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

button {
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
}

.calculator-result {
  margin-top: 20px;
  font-size: 1.2rem;
}
</style>
