import { defineComponent, h, inject } from "vue"
import { routerKey } from "./injectionSymbols"

export const RouterLink = defineComponent({
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      required: true
    },
  },
  setup(props, { slots }) {
    const router = inject(routerKey)!
    return () => h(
      'a',
      {
        href: `#${props.to}`,
        onClick: () => { router.push(props.to) }
      },
      slots.default && slots.default()
    )
  },
})
