import { shallowMount } from '@vue/test-utils'
import QuizView from '../../views/QuizView.vue'
import store from '../../store'
import { describe, beforeEach, it, expect } from 'vitest'
describe('QuizView.vue', () => {
  beforeEach(() => {
    store.commit('resetQuiz') // Reset the store before each test
  })

  it('Menampilkan Pertanyaan saat ini', () => {
    const wrapper = shallowMount(QuizView, {
      global: {
        plugins: [store]
      }
    })

    expect(wrapper.text()).toContain('What is the largest mammal in the world?')
  })

  it('Meningkatkan skor pada jawaban yang benar', async () => {
    const wrapper = shallowMount(QuizView, {
      global: {
        plugins: [store]
      }
    })

    await wrapper.findAll('button')[1].trigger('click') // Click on "Blue Whale"

    expect(store.state.score).toBe(1)
  })

  it('Pindah ke pertanyaan berikutnya setelah menjawab', async () => {
    const wrapper = shallowMount(QuizView, {
      global: {
        plugins: [store]
      }
    })

    await wrapper.findAll('button')[1].trigger('click') // Click on "Blue Whale"
    expect(wrapper.text()).toContain('Which animal is known as the king of the jungle?')
  })

  it('Menampilkan skor akhir setelah semua pertanyaan dijawab', async () => {
    const wrapper = shallowMount(QuizView, {
      global: {
        plugins: [store]
      }
    })

    for (let i = 0; i < 5; i++) {
      await wrapper.findAll('button')[1].trigger('click')
    }

    expect(wrapper.text()).toContain('Quiz Completed!')
    expect(wrapper.text()).toContain('Your score: 2 out of 5')
  })
})
