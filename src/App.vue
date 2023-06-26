<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :counter="123" />
  <name-couter />
  <name-couter-reactive />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NameCouter from './components/NameCouter.vue'
import NameCouterReactive from './components/NameCouterReactive.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NameCouter,
    NameCouterReactive,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
