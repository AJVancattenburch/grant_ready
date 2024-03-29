<template>
  <div id="hero" class="home d-flex flex-column align-items-center justify-content-center">
    <Hero />

    <SVGBackgroundWrapper>
      <section id="about" class="col-12 about-section-container d-flex">
        <About />
      </section>

      <section id="services" class="col-12 services-section-container d-flex justify-content-center align-items-center">
        <Services />
      </section>

      <section id="testimonials" class="col-12 testimonials-section-container d-flex justify-content-center align-items-center">
        <Testimonials />
      </section>
    </SVGBackgroundWrapper>
  </div>
</template>

<script>
import { ref } from 'vue'
import * as data from '../constants/index.js'
import Hero from '../components/Hero.vue'
import SVGBackgroundWrapper from '../components/SVGBackgroundWrapper.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Testimonials from '../components/Testimonials.vue'

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
    SVGBackgroundWrapper,
    About,
    Services,
    Testimonials, 
  }
}
</script>

<style scoped lang="scss">
* {
  font-family: 'Futura' Condensed Medium;
}
.home {
  height: 100%;
  width: 100%;
  [class*="section-container"] {
    height: 100vh;
    .services-section-container {
      scroll-margin-top: 100px;
    }
  }
  @media (max-width: 500px) {
    [class*="section-container"] {
      height: 92.5vh;
    }
    .services-section-container {
      height: 100vh;
    }
  }
}
</style>