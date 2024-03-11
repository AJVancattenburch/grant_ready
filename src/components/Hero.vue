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
@import url('../assets/font/Mystical Woods/stylesheet.css');

.heroImg {
  position: relative;
  height: 100vh;
  width: 100%;
  font-family: 'Mystical Woods Rough Script';
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
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at top center, transparent 85%, var(--blue-vintage)), linear-gradient(180deg, transparent 90%, var(--blue-vintage));
    z-index: 1;
  }
}

@media (max-width: 768px) {
  .card-body {
    .header {
      font-size: 3rem !important;
    }
    p {
      font-size: 1.5rem !important;
    }
    .btn-primary {
      font-size: 1rem !important;
    }
  }
}
</style>../constants../constants