import { defineComponent, h } from "vue"

export const RouterLink = defineComponent({
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      required: true
    },
  },
  setup(props, { slots }) {
    return () => {
      return h(
        'a',
        {
          href: `#${props.to}`,
          onClick: () => {/*todo*/ }
        },
        slots.default && slots.default()
      )
    }
  },
})
