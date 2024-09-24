<template>
  <div>
    <h1>CRUD Example</h1>
    <input v-model="newItem" placeholder="Add or Edit an item" />
    <button @click="isEditing ? updateItem() : addNewItem()">
      {{ isEditing ? 'Update' : 'Add' }}
    </button>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
        <button @click="startEditing(index, item)">Edit</button>
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      newItem: '',
      isEditing: false,
      editingIndex: null
    }
  },
  computed: {
    ...mapState(['items'])
  },
  methods: {
    ...mapActions(['addItem', 'removeItem', 'editItem']),
    addNewItem() {
      if (this.newItem) {
        this.addItem(this.newItem)
        this.newItem = ''
      }
    },
    startEditing(index, item) {
      this.newItem = item
      this.isEditing = true
      this.editingIndex = index
    },
    updateItem() {
      if (this.newItem) {
        this.editItem({ index: this.editingIndex, item: this.newItem })
        this.newItem = ''
        this.isEditing = false
        this.editingIndex = null
      }
    }
  }
}
</script>
