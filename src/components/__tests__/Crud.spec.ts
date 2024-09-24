import { shallowMount } from '@vue/test-utils'
import CrudAplikasi from '../../views/CrudAplikasi.vue'
import { createStore } from 'vuex'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('CrudAplikasi', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      addItem: vi.fn(),
      removeItem: vi.fn(),
      editItem: vi.fn()
    }

    store = createStore({
      state: {
        items: ['Item 1', 'Item 2']
      },
      actions
    })
  })

  it('Merender item dengan benar', () => {
    const wrapper = shallowMount(CrudAplikasi, {
      global: {
        plugins: [store]
      }
    })

    expect(wrapper.findAll('li').length).toBe(2)
  })

  it('Menambahkan item baru', async () => {
    const wrapper = shallowMount(CrudAplikasi, {
      global: {
        plugins: [store]
      }
    })

    wrapper.vm.newItem = 'New Item'
    await wrapper.vm.addItem()
  })

  it('Menghapus Item', async () => {
    const wrapper = shallowMount(CrudAplikasi, {
      global: {
        plugins: [store]
      }
    })

    await wrapper.find('button:nth-of-type(2)').trigger('click')
    expect(actions.removeItem).toHaveBeenCalledWith(expect.any(Object), 0)
  })

  it('Mengubah Item', async () => {
    const wrapper = shallowMount(CrudAplikasi, {
      global: {
        plugins: [store]
      }
    })

    await wrapper.vm.editItem(0, 'Updated Item')
  })
})
