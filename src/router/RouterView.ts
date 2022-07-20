import { defineComponent, h } from "vue"
import Home from "../pages/Home.vue"

export const RouterView = defineComponent({
  name: 'RouterView',
  setup(props, { slots }) {

    return () => {
      const component = Home/* TODO */

      return h(component)
    }
  },
})
