<template>
  <div v-if="heroSection" :key="heroSection.id" :id="heroSection.id" class="heroImg">
    <div class="col-8 logo-box">
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import * as data from '../constants';
import { logger } from '../utils/Logger.js';
export default {
  setup() {
    const heroSection = ref(data.hero)
    
    return {
      heroSection,
      icon: computed(() => `url(${heroSection.value.logo})`),
      backgroundImg: computed(() => `url(${heroSection.value.backgroundImg})`)
    }
  },
}
</script>

<style scoped lang="scss">

.heroImg {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: v-bind(backgroundImg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  place-content: center;
  text-align: center;
  .logo-box {
    position: relative;
    top: -50%;
    height: 250px;
    width: 450px;
    font-size: 5rem;
    letter-spacing: 0.5rem;
    background: #5a3d2b;
    border-radius: 50%;
    box-shadow: 0 0 3px 10px #363e5a;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-55%, -25%);
      width: 150%;
      height: 150%;
      background: v-bind(icon);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 1;
      filter: drop-shadow(5px 10px 2px #363e5a);
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 50px 50px var(--retro-blue);
  }
}

@media (max-width: 500px) {
  .heroImg {
    overflow: hidden;
    .logo-box {
      transform: scale(0.75) translate(5%, 50%);
    }
  }
}
</style>../constants../constants