import { defineComponent } from 'vue'
const PropsType = {
  name: String,
}
export default defineComponent({
  props: PropsType,
  name: 'TestTsxComp',
  setup(props) {
    return () => <div>{props.name}</div>
  },
})
