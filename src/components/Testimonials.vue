<template>
  <section :id="testimonialSection.id" class="col-12 d-flex flex-column justify-content-center align-items-center">
    <h1 class="col-12 d-flex justify-content-center align-items-center">{{ testimonialSection.header }}</h1>
    
    <section class="col-12 carousel-container">
      <Carousel ref="testimonialsCarousel" :itemsToShow="2.25" :wrapAround="true" :transition="500" snapAlign="start">
        <Slide v-for="(t, index) in testimonials" :key="index">
          <div class="col-12 mx-2 d-flex flex-column justify-content-center align-items-center pt-5">
            <div v-if="t.rating" class="col-12 d-flex justify-content-center align-self-start">
              <div v-for="(rating, index) in t.rating" :key="index" class="mdi mdi-star fs-2" :class="{
                'mdi-star': index < Math.floor(t.rating),
                'mdi-star-half': index === Math.floor(t.rating) && t.rating % 1 !== 0,
                'mdi-star-outline': index >= Math.ceil(t.rating)
              }"></div>
            </div>
            <div class="col-12 d-flex justify-content-around align-items-center px-5">
              <h3 class="">{{ t.name }}</h3>
              <div class="company-logo-container">
                <img :id="`${slugKebab(t.name)}-logo`" :src="t.company_logo" alt="image" class="rounded-circle img-fluid">
              </div>
            </div>
          </div>
          <div class="col-12 fs-4">
            <p>{{ t.content }}</p>
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
import { Carousel, Pagination, Slide } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import { logger } from "../utils/Logger.js"

export default {
  // defineComponent
  // name: 'Carousel',
  components: {
    Carousel,
    Slide,
    // Pagination,
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
    }
  }
}

</script>




<style scoped>
* {
  z-index: 1;
}
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start !important;
  .carousel__slide {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
    height: 500px;
    border-radius: 5%;
    box-shadow: 0 0 5px 0 var(--brown-vintage) inset, ;
    color: #000;
    transition: transform 0.5s;
    cursor: pointer;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    &::after {
      content: '';
      position: absolute;
      display: grid;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(var(--shadow-orange), var(--shadow-blue), transparent), linear-gradient(#ffffff90, transparent);
      border-left: 1px solid #00000020;
      border-bottom: 2px solid #00000040;
      border-radius: 5%;
      filter: drop-shadow(0 0 5px var(--brown-vintage));
    }
    .carousel__slide--visible {
      position: relative;
      top: 0;
      right: 0;
      width: 50px;
      height: 500px;
      object-fit: contain;
      border-radius: 50%;
      outline: 2px solid #000 !important;
    }
    .mdi-star {
      color: goldenrod;
    }
    .company-logo-container {
      position: relative;
      width: 20%;
      height: 50px;
      background: black;
      img[id$="-logo"] {
        width: 50px;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        outline: 2px solid #000;
      }
    }
  }
}
</style>