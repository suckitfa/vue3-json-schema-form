<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ name2 }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue'
export default defineComponent({
  name: 'NameCouter',
  setup() {
    const name = ref('hello')
    setInterval(() => {
      name.value += '!'
    }, 1000)

    // 计算属性
    const name2 = computed(() => {
      return name.value + '2'
    })

    // watch
    watchEffect(() => {
      console.log('name = ', name.value)
    })
    return {
      name,
      name2,
    }
  },
})
</script>
