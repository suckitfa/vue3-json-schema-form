<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :counter="123" />
  <name-couter />
  <name-couter-reactive />
  <test-tsx-comp name="testjsxcomp" />
  <render-name-couter />
  <RenderHelloWorld name="Bob Tang" :age="123" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NameCouter from './components/NameCouter.vue'
import NameCouterReactive from './components/NameCouterReactive.vue'
import TestTsxComp from './components/TestTsxComp'
import RenderHelloWorld from './components/RenderHelloWorld'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NameCouter,
    NameCouterReactive,
    TestTsxComp,
    // RenderHelloWorld,
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
