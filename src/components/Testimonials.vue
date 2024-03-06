<template>
  <section class="col-12 d-flex flex-column justify-content-center align-items-center">
    <h1 class="col-12 d-flex justify-content-center align-items-center">{{ testimonialsHeader }}</h1>
    
    <section class="col-12 carousel-container">
      <Carousel ref="testimonialsCarousel" :itemsToShow="2.25" :wrapAround="true" :transition="500" snapAlign="start">
        <Slide v-for="(t, index) in testimonials" :key="index">
          <div class="mx-2 d-flex flex-column align-items-center">
            <h3 class="col-10">{{ t.name }}</h3>
            <img :id="`${slugKebab(t.name)}-logo`" :src="t.picture" alt="image" class="rounded-circle img-fluid col-2">
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
import * as data from "../constants"
import { slugKebab } from "../utils/slugKebab.js"
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

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
        picture: t.picture,
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start !important;
  .carousel {
    position: relative;
    display: flex;
    flex-direction: column;
    .carousel__slide {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: between;
      padding: 1rem;
      margin: 1rem;
      width: 100%;
      height: 600px;
      border-radius: 5%;
      box-shadow: 0 0 5px 0 var(--brown-vintage) inset, ;
      background: linear-gradient(175deg, var(--blue-vintage), var(--cream-vintage));
      color: #000;
      text-align: center;
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
    }
    img[class$="-logo"] {
      width: 50px;
      height: 50px;
      object-fit: contain;
      border-radius: 50%;
      outline: 2px solid #000;
    }
  }
}
</style>