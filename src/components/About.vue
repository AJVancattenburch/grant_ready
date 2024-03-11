<template>
  <div class="col-12 about-section d-flex flex-column">
    <h1 class="col-12 about-header mb-3 p-3 text-center">{{ aboutSection.header }}</h1>
    <div class="col-12 d-flex justify-content-center align-items-center">
      <div class="col-2 about-section-img d-flex justify-content-center align-items-center ps-5">
        <img :src="aboutSection.image" class="img-fluid" width="auto" alt="">
      </div>
      <div class="col-8 d-flex flex-column justify-content-end align-items-center">
        <p class="paragraph">{{ aboutSection.paragraph1 }}</p>
        <p class="paragraph">{{ aboutSection.paragraph2 }}</p>
      </div>
      <div class="col-2 about-section-img d-flex justify-content-center align-items-center pe-5">
        <img :src="aboutSection.image" class="img-fluid" width="auto" alt="">
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-section {
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center left;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 1rem;
  scroll-margin: 0;
  .about-header {
    color: #000;
    font-size: 3rem;
    font-family: 'Mystical Woods Rough Script', cursive;
    text-shadow: 0 2px 2px var(--cream-vintage);
    background: linear-gradient(to bottom, var(--blue-vintage), var(--cream-vintage));
    margin-bottom: 1rem;
  }
  .about-section-img {
    
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      box-sizing: content-box;
    }
  }
  p.paragraph {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
    text-indent: 2rem;
    padding: 1rem;
    z-index: 1;
  }
}

@media (max-width: 768px) {
  .about-section {
    background-image: none;
  }
  .about-section {
    &::before {
      width: 75%;
      height: 75%;
      background-position: left;
      left: 0%;
      transform: scaleX(1);
    }
  }
}
</style>../constants../constants/index.js