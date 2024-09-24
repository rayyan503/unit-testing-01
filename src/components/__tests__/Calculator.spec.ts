import { shallowMount } from '@vue/test-utils'
import CalculatorView from '../../views/CalculatorView.vue'
import { createStore } from 'vuex'

import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('CalculatorView.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      input: '',
      result: 0
    }

    actions = {
      setInput: vi.fn(),
      calculateResult: vi.fn(),
      clear: vi.fn()
    }

    store = createStore({
      state,
      actions
    })
  })

  it('Menampilkan input kalkulator dengan benar', () => {
    const wrapper = shallowMount(CalculatorView, {
      global: {
        plugins: [store]
      }
    })
    const inputField = wrapper.find('.calculator-input')
    expect(inputField.exists()).toBe(true)
    expect(inputField.attributes('placeholder')).toBe('0')
  })

  it('Membersihkan input ketika tombol C diklik', async () => {
    const wrapper = shallowMount(CalculatorView, {
      global: {
        plugins: [store]
      }
    })

    const buttons = wrapper.findAll('button')
    const clearButton = buttons.filter((button) => button.text() === 'C')[0]

    await clearButton.trigger('click')

    expect(actions.clear).toHaveBeenCalled()
  })

  it('Menampilkan hasil dengan benar', async () => {
    state.result = 10
    const wrapper = shallowMount(CalculatorView, {
      global: {
        plugins: [store]
      }
    })

    const result = wrapper.find('.calculator-result p')
    expect(result.text()).toBe('Result: 10')
  })

  it('Menghitung hasil ketika tombol (=) diklik', async () => {
    const wrapper = shallowMount(CalculatorView, {
      global: {
        plugins: [store]
      }
    })
    const equalsButton = wrapper.find('button:nth-child(16)') // Button '='

    await equalsButton.trigger('click')
  })

  it('Membersihkan input ketika tombol (C) diklik', async () => {
    const wrapper = shallowMount(CalculatorView, {
      global: {
        plugins: [store]
      }
    })
    const clearButton = wrapper.find('button:nth-child(15)') // Button 'C'

    await clearButton.trigger('click')
  })
})
