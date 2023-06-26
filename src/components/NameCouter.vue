<template>
  <p>
    {{ name }}
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'NameCouter',
  setup() {
    const name = ref('hello')
    setInterval(() => {
      name.value += '!'
    }, 1000)
    return {
      name,
    }
  },
})
</script>
