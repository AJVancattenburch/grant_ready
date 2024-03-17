<template>
  <section class="col-12 d-flex flex-column section-container">
    <h1 class="col-12 d-flex justify-content-center align-items-center header">{{ testimonialSection.header }}</h1>
    
    <section class="carousel-container">
      <Carousel ref="testimonialsCarousel" :itemsToShow="!isMobile ? 2.25 : 2.75" :wrapAround="true" :transition="500" snapAlign="center" class="pt-5">
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
            <h3 class="col-12 d-flex justify-content-start align-self-start py-3">{{ t.name }}</h3>
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
      isMobile: computed(() => window.innerWidth < 500)
    }
  }
}

</script>




<style scoped>
* {
  z-index: 1;
}

.header {
  position: relative;
  background: var(--shadow-retro-red);
  font-family: 'Mystical Woods Rough Script', cursive;
  padding: 1rem;
  border: 5px groove var(--shadow-retro-orange);
  border-style: inset;
  border-right: 0;
  border-left: 0;
  filter: drop-shadow(0 0 5px var(--shadow-retro-red));
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/img/woodgrain-texture.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: .5;
  }
}
.carousel-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: self-start !important;
  overflow-x: hidden;
  .carousel__slide {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    height: 425px;
    border-radius: 5%;
    box-shadow: 0 0 5px 0 var(--retro-brown) inset, ;
    color: #000;
    transition: transform 0.5s;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    &::before {
      content: '';
      position: absolute;
      display: grid;
      top: 0;
      left: 0;
      width: 80%;
      min-height: 425px;
      height: 100%;
      background: linear-gradient(var(--shadow-retro-orange), var(--shadow-retro-blue), transparent), linear-gradient(#ffffff90, transparent);
      border-left: 1px solid #00000020;
      border-bottom: 2px solid #00000040;
      border-radius: 5%;
      filter: drop-shadow(0 0 5px var(--retro-brown));
      z-index: 1;
      background-blend-mode: multiply;
    }
    p.text-body {
      width: 80%;
      height: 190px;
      overflow-y: auto !important;
      scroll-behavior: smooth;
      padding-bottom: 1rem;
      padding-inline: 1rem;
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      text-indent: 1rem;
      &::first-line {
        text-indent: 0;
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
    .mdi-star {
      color: goldenrod;
      filter: brightness(1.5) drop-shadow(3px 3px 5px #575757) ;
    }
    .logo-container {
      position: absolute;
      top: 0;
      right: 20%;
      width: 150px;
      height: 125px;
      background: linear-gradient(var(--shadow-retro-orange), var(--shadow-retro-blue));
      border-bottom-left-radius: 50%;
      border-top-right-radius: 20%;
      filter: drop-shadow(-3px 3px 5px var(--retro-brown)) blur(.5px) saturate(.75);
      &::before, &::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 100px;
        background:  radial-gradient(ellipse at center left, transparent 65%, transparent 70%, var(--shadow-retro-brown) 80%);
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 100% 50%);
      }
      &::before {
        top: 100%;
        right: 0;
      }
      &::after {
        top: 0;
        right: 100%;
      }
      img[id$="-logo"] {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75px;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        z-index: 2;
      }
    }
    .invert-border-radius {
      position: absolute;
      top: 0;
      right: 20%;
      width: 150px;
      height: 125px;
      border-radius: 50%;
      mix-blend-mode: lighten;
      &::before, &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 30px;
        height: 40px;
        overflow: hidden;
        filter: saturate(.75);
      }
      &::before {
        clip-path: polygon(50% 0, 100% 0%, 100% 100%, 100% 50%);
        background:  radial-gradient(ellipse at center left, transparent 65%, transparent 70%,  #c67e31 80%);
        top: 0;
        left: -29.5px;
      }
      &::after {
        background: radial-gradient(ellipse at bottom left, transparent 71%, transparent 10%, #75c8ae99 80%);
        bottom: -42.3q;
        right: 0;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .carousel-container {
    .carousel__track {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      gap: 1rem;
    }
  }
}
</style>