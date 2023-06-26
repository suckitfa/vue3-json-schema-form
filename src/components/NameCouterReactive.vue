<template>
  <p>
    {{ state.name }}
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'NameCouterReactive',
  setup() {
    const state = reactive({
      name: 'hello',
    })
    setInterval(() => {
      state.name += '!'
    }, 1000)
    return {
      state,
    }
  },
})
</script>
