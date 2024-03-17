<template>
  <section :id="id" :component="Component" class="col-12 section-container d-flex justify-content-center align-items-center">
    <Component />
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