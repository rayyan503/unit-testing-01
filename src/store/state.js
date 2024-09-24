export default {
  input: '',
  result: 0,
  todos: [],
  items: [],
  questions: [
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Great White Shark'],
      answer: 'Blue Whale'
    },
    {
      question: 'Which animal is known as the king of the jungle?',
      options: ['Elephant', 'Lion', 'Tiger', 'Giraffe'],
      answer: 'Lion'
    },
    {
      question: 'The correct statement about amphibians is as follows?',
      options: ['Lion', 'Rabbit', 'Pig', 'Crocodille'],
      answer: 'Crocodille'
    },
    {
      question: 'Animals that live in two worlds are called?',
      options: ['Amphibians', 'Reptile', 'Carnivora', 'Aves'],
      answer: 'Amphibians'
    },
    {
      question: 'The statement below, which animal is a carnivore?',
      options: ['Pig', 'Cow', 'Tiger', 'Horse'],
      answer: 'Tiger'
    }
  ],
  currentQuestionIndex: 0,
  score: 0
}
