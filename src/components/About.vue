<template>
  <div class="col-12 about-section d-flex flex-column">
    <h1 class="col-12 about-header mb-3 p-2 text-center">{{ aboutSection.header }}</h1>
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
@import url('../assets/font/Healing Bestie/stylesheet.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
}

.about-section {
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center left;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .about-header {
    position: relative;
    background: var(--shadow-retro-red);
    font-family: 'Healing Bestie Demo';
    font-size: 3rem;
    border: 5px groove var(--shadow-retro-orange);
    border-right: 0;
    border-left: 0;
  filter: drop-shadow(0 0 5px var(--shadow-retro-blue));
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(../assets/img/woodgrain-texture.png), var(--shadow-retro-red);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: .5;
      z-index: -1;
    }
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
  }
}

@media (max-width: 500px) {
  .about-section {
    padding-bottom: 5rem;
    &::before {
      width: 75%;
      height: 75%;
      background-position: left;
      left: 0%;
      transform: scaleX(1);
    }
  }
}
</style>