import HelloWorld from './HelloWorld.vue'

const RenderHelloWorld = (msg: string, counter: number) => (
  <HelloWorld msg={msg} counter={counter} />
)
export default RenderHelloWorld
