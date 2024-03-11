<template>
  <div id="hero" class="home d-flex flex-column align-items-center justify-content-center">
    <Hero />

    
    <section id="about" class="col-12 about-section-container d-flex">
      <About />
    </section>

    <section id="services" class="col-12 services-section-container d-flex justify-content-center align-items-center">
      <Services />
    </section>

    <section class="col-12 testimonials-section-container d-flex justify-content-center align-items-center">
      <Testimonials />
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import * as data from '../constants/index.js'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Testimonials from '../components/Testimonials.vue'
import { logger } from "../utils/Logger.js"

export default {
  setup() {

    const heroSection = ref(data.hero)
    const aboutSection = ref(data.about)
    const servicesSection = ref(data.service_section.services.map(s => s))
    const testimonialsSection = ref(data.testimonial_section.testimonials.map(t => t))
  
    return {
      heroSection,
      aboutSection,
      servicesSection,
      testimonialsSection
    }
  },
  components: { 
    Hero,
    About,
    Services,
    Testimonials, 
  }
}
</script>

<style scoped lang="scss">
@import url('../assets/font/Mystical Woods/stylesheet.css');

//* {
//  outline: 2px solid red;
//}
.home {
  height: 100%;
  width: 100%;
  background: var(--cream-vintage);
  font-family: system-ui;
  [class*="section-container"] {
    height: 100vh;
    &.about-section-container {
      background: var(--cream-vintage);
    }
  }
}
</style>
../constants/index.js../constants/index.js