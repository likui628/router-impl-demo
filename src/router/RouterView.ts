import { defineComponent, h, inject, watch } from "vue"
import { routeLocationKey } from "./injectionSymbols"

export const RouterView = defineComponent({
  name: 'RouterView',
  setup(props, { slots }) {
    const currentRoute = inject(routeLocationKey)

    return () => {
      if (currentRoute?.value
        && currentRoute.value.component) {
        return h(currentRoute.value.component)
      }
      return h('div')
    }
  },
})
