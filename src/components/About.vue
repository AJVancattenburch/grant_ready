<template>
  <div class="col-12 about-section d-flex flex-column">
    <h1 class="col-12 about-header mb-3 p-2 text-center text-uppercase">{{ aboutSection.header }}</h1>
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="col-8 content-container d-flex flex-column justify-content-end align-items-center">
        <p class="content">{{ aboutSection.paragraph1 }}</p>
        <div class="col-12 img-container">
          <img :src="aboutSection.image" class="img-fluid" alt="">
          <img :src="aboutSection.image" class="img-fluid" alt="">
        </div>
        <p class="content">{{ aboutSection.paragraph2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import * as data from '../constants/index.js'
import { logger } from "../utils/Logger.js"

export default {
  setup() {
    const aboutSection = ref(data.about)
    return {
      aboutSection,
    }
  }
}
</script>

<style scoped lang="scss">
@import url('../assets/scss/_about_section.scss');

* {
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
}
</style>