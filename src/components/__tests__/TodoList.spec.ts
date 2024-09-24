import { shallowMount } from '@vue/test-utils'
import TodoList from '../../views/TodoList.vue'
import { createStore } from 'vuex'
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('TodoList.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      todos: ['Sample Todo']
    }

    actions = {
      addTodo: vi.fn(),
      removeTodo: vi.fn()
    }

    store = createStore({
      state,
      actions
    })
  })

  it('Menampilkan daftar tugas dengan benar', () => {
    const wrapper = shallowMount(TodoList, {
      global: {
        plugins: [store]
      }
    })

    // Check if the todo is rendered
    expect(wrapper.find('li').text()).toBe('Sample Todo Remove')
  })

  it('Tambah tugas baru', async () => {
    const wrapper = shallowMount(TodoList, {
      global: {
        plugins: [store]
      }
    })

    const input = wrapper.find('input')
    await input.setValue('New Todo')

    const addButton = wrapper.find('button')
    await addButton.trigger('click')

    // Ensure addTodo was called with "New Todo"
    expect(actions.addTodo).toHaveBeenCalledWith(expect.anything(), 'New Todo')
  })

  it('Hapus Tugas', async () => {
    const wrapper = shallowMount(TodoList, {
      global: {
        plugins: [store]
      }
    })

    const removeButton = wrapper.find('li button')
    await removeButton.trigger('click')

    // Ensure removeTodo was called with the correct index
    expect(actions.removeTodo).toHaveBeenCalledWith(expect.anything(), 0)
  })
})
