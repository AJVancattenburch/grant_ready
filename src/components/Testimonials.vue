<template>
  <section class="col-12 d-flex flex-column section-container">
    <h1 class="col-12 d-flex justify-content-center align-items-center header text-uppercase">{{ testimonialSection.header }}</h1>
    
    <section class="">
      <Carousel ref="testimonialsCarousel" :itemsToShow="!isMobile ? 2.5 : 2" :wrapAround="true" :transition="500" snapAlign="center" class="carousel-container  pt-5">
        <Slide v-for="(t, index) in testimonials" :key="index">
          <div class="">
            <div class="logo-container">
              <img :id="`${slugKebab(t.name)}-logo`" :src="t.company_logo" alt="image" class="rounded-circle img-fluid">
            </div>
            <span class="invert-border-radius"></span>
          </div>
          <div class="col-12 d-flex flex-column align-items-center pt-5 pe-1">
            <div v-if="t.rating" class="col-12 d-flex justify-content-start align-self-start">
              <div v-for="(rating, index) in t.rating" :key="index" class="mdi mdi-star fs-2" :class="{
                'mdi-star': index < Math.floor(t.rating),
                'mdi-star-half': index === Math.floor(t.rating) && t.rating % 1 !== 0,
                'mdi-star-outline': index >= Math.ceil(t.rating)
              }"></div>
            </div>
            <h3 class="col-12 testimonial-header d-flex justify-content-start align-self-start py-3">{{ t.name }}</h3>
          </div>
          <div class="col-12 fs-4">
            <p class="text-body">{{ t.content }}</p>
          </div>
        </Slide>
      </Carousel>
    </section>
  </section>
</template>

<script>
import { computed, ref } from "vue"
import * as data from "../constants/index.js"
import { slugKebab } from "../utils/slugKebab.js"
import { Carousel, Slide } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import { logger } from "../utils/Logger.js"

export default {
  name: 'WrapAround',
  components: {
    Carousel,
    Slide
  },
  setup(){
    const testimonialsCarousel = ref(null)

    const testimonialSection = ref(data.testimonial_section)

    const testimonials = computed(() => {
      if (testimonialSection.value.testimonials) {
        logger.log(testimonialSection.value.testimonials)
        return testimonialSection.value.testimonials
      }
    })

    return {
      slugKebab,
      testimonialsCarousel,
      testimonialSection,
      testimonials,
      isMobile: computed(() => {
        return window.innerWidth < 500
      })
    }
  }
}

</script>




<style scoped lang="scss">
@import url('../assets/scss/_testimonials_section.scss');

* {
  z-index: 1;
}
</style>