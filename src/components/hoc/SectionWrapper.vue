<template>
  <section :id="id" :component="Component">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    Component: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      
    }
  }
})
</script>