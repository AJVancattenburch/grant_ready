<template>
  <section class="col-12 d-flex flex-column justify-content-center align-items-center">
    <h1 class="col-12 d-flex justify-content-center align-items-center">{{ testimonialsHeader }}</h1>
    
    <section class="col-12 carousel-container">
      <Carousel ref="testimonialsCarousel" :itemsToShow="2.25" :wrapAround="true" :transition="500" snapAlign="start">
        <Slide v-for="(t, index) in testimonials" :key="index">
          <div class="col-12 mx-2 d-flex flex-column justify-content-around align-items-center pt-5">
            <div class="col-12 d-flex justify-content-center align-self-start">
              <div v-for="i in 5" :key="i" class="mdi mdi-star fs-2" :class="t.rating >= i ? 'mdi-star' : 'mdi-star-outline'"></div>
            </div>
            <div class="col-10 d-flex justify-content-around align-items-center">
              <h3 class="">{{ t.name }}</h3>
              <img :id="`${slugKebab(t.name)}-logo`" :src="t.company_logo" alt="image" class="rounded-circle img-fluid">
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

export default {
  // defineComponent
  // name: 'HomeCarousel',
  components: {
    Carousel,
    Slide,
    // Pagination,
  },
  
  setup(){
    const testimonialsCarousel = ref(null)

    const testimonials = ref(data.testimonialsSection.testimonials.map(t => {
      return {
        ...t,
        company_logo: t.company_logo,
        name: t.name,
        content: t.content
      }
    }))

    const testimonialsHeader = computed(() => {
      return data.testimonialsSection.header
    })

    return {
      slugKebab,
      testimonialsCarousel,
      testimonials,
      testimonialsHeader
    }
  }
}



</script>




<style scoped>
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
      background: linear-gradient(175deg, var(--blue-vintage), var(--cream-vintage));
      color: #000;
      transition: transform 0.5s;
      cursor: pointer;
      user-select: none;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
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
</style>../constants/index.js../constants/index.js