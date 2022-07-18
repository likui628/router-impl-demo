import { defineComponent, h } from "vue"

export const RouterView = defineComponent({
  name: 'RouterView',
  setup(props, { slots }) {

    console.log(slots)
    return () => {

      return h(
        'div',
        {
          //todo
        },
        "router-view"
      )
    }
  },
})
