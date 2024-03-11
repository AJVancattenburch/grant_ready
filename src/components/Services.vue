<template>
  <section v-if="serviceSection" :id="serviceSection.id" class="d-flex flex-column justify-content-center align-items-center services-section">
    <h1 class="col-12 services-header p-3 text-center">{{ serviceSection.header }}</h1>

    <div class="container horizontal-accordion my-5">
      <div
        class="card choice unset small p-4 mx-1" v-for="service in serviceSection"
        :key="service.name"
        @click="toggleSection(service.name)"
        :class="`${service.name}-icon`"
        :style="{
          backgroundColor: service.backgroundColor,
          color: service.textColor
        }"
      >
        <div class="card-header text-capitalize" :class="`${service.name}-header`">{{ service.name }}</div>
        <div class="card-body pt-0 mt-0" :class="`${service.name}-body`">
          <p class="card-text p-3 pt-0 mt-0">{{ service.content }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { service_section } from '../constants/index.js'
import { logger } from "../utils/Logger.js"

export default {
  setup() {

    const serviceSection = ref(service_section)

    const activeSection = ref(false)

    //Expands default card when section is scrolled into view
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const choice = document.querySelector(".planning-icon")
          choice.classList.remove("small")
          choice.classList.add("default-expand")
          observer.unobserve(entry.target)
        }
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
      once: true
    })
    
    const toggleSection = (section) => {
      activeSection.value = section
      const choiceArray = document.querySelectorAll(".choice")
      choiceArray.forEach((card) => {
          card.addEventListener("click", () => {
            choiceArray.forEach((element) => {
              element.classList.remove("default-expand", "expand", "unset")
              element.classList.add("small")
              element.setAttribute("data-text", element.querySelector(".card-header").textContent)
            })
            card.classList.remove("small")
            card.classList.add("expand")
            card.classList.add("card-header")
          });
      });
    }

    onMounted(() => {
      const service = serviceSection.value.find(s => s.name)
      logger.log(service)
      activeSection.value = observer
      const choiceArray = document.querySelectorAll(".choice")
      choiceArray.forEach((element) => {
        const setHeaderContent = element.setAttribute("data-text", element.querySelector(".card-header").textContent)
        if (service) {
          observer.observe(element)
          setHeaderContent
        }
        else if (!service) {
          element.classList.remove("expand", "unset", "card-header")
          element.classList.add('small')
        }
      })
    })

    const icon = computed(() => {
      return `url(${serviceSection.value.services.map(s => s.icon)})`
    })

    return {
      icon,
      observer,
      serviceSection,
      activeSection,
      toggleSection,
      textColor: computed(() => `${serviceSection.value.services.map(s => s.textColor)}`),
      backgroundColor: computed(() => `url(${serviceSection.value.services.backgroundColor})`),
    }
  }
}
</script>

<style scoped lang="scss">
@import url('../assets/font/Mystical Woods/stylesheet.css');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.services-section {
  position: relative;
  
  height: 100vh;
  width: 100%;
  background: var(--brown-vintage);
  .services-header {
    font-size: 3rem;
    position: absolute;
    top: 0;
    font-family: 'Mystical Woods Rough Script', cursive;
    text-shadow: 0 2px 2px var(--cream-vintage);
    background: linear-gradient(to bottom, var(--cream-vintage) 0, var(--brown-vintage) 100%);
  }

  .container{
    display: flex;
    width: 100%;
    padding: 0;
  }
  .choice{
    position: relative;
    height: 500px;
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
    float: left;
    font-family: 'Mystical Woods Rough Script';
    align-items: center;
    transition: width 0.2s;
    border-radius:3px;
    background-position: center;
    background-size: cover;
    &::after {
      content: '';
      position: absolute;
      display: grid;
      place-content: center;
      align-items: center;
      background-image: v-bind(icon);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .card-header {
      font-size: 3rem;
    }
    .card-body {
      font-family: system-ui;
      font-weight: 500;
    }
  }
  .default-expand,
  .expand {
    width: 100% !important;
    height: 100% !important;
    min-height: 350px;
    > div:has(.building-header, .facilitating-header), .building-body, .facilitating-body {
      position: relative;
      display: grid;
      place-content: center;
      align-items: center;
      transition-delay: 200ms;
      opacity: 1 !important;
      font-size: 1.25rem;
      text-shadow: 1px 1px .5px #000;
      > p {
        position: relative;
        opacity: 1 !important;
      }
    }
    &::before {
      content: '';
      position: absolute;
      display: grid;
      place-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: #00000030;
      border-radius: 3px;
    }
    
  }
  .expand:has(.planning-body) {
    position: relative;
    display: grid;
    place-content: center;
    align-items: center;
    transition-delay: 200ms;
    opacity: 1 !important;
    font-size: 1.25rem !important;
    text-shadow: 1px 1px .5px #000;
    > .planning-header {
      position: absolute;
      display: grid;
      justify-content: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 500px;
      z-index: 1;
      border-radius: 3px;
    }
    > p {
      position: relative;
      opacity: 1 !important;
    }
  }

  .unset {
    position: relative;
    width: 10%;
    background-color: v-bind(backgroundColor);
  }
  [class$="-icon"] {
    position: relative;
    width: 100%;
    height: 500px;
    filter: drop-shadow(0 0 25px var(--brown-vintage));
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      display: grid;
      top: 0;
      left: 10%;
    }
  }
  .unset {
    .planning-body {
      position: relative;
      display: grid;
      transition-delay: 200ms;
      opacity: 1 !important;
      font-size: 1.25rem !important;
      text-shadow: 1px 1px .5px #000;
      > p {
        position: relative;
        padding-top: 100px !important;
        opacity: 1 !important;
      }
    }
  }
  .small {
    position: relative;
    width: 10%;
    height: 500px;
    filter: drop-shadow(0 0 25px var(--brown-vintage));
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 70%;
      height: 60%;
      z-index: 1;
      //box-shadow: 0 0 0px 10px #5a3d2b90;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      background-image: none;
      transform: translateX(-45%);
    }
    &::after {
      content: attr(data-text);
      position: absolute;
      display: grid;
      justify-content: center;
      place-content: center;
      align-items: center;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      font-family: 'Mystical Woods Rough Script';
      text-transform: capitalize;
      font-size: 2.5rem;
      text-shadow: 0 1px 0 var(--cream-vintage);
      background-color: v-bind(backgroundColor);
      transform: rotate(270deg) translate(0%);
    }
  }
  .small > div {
    transform: rotate(270deg) !important;
    transform-origin: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    > p {
      opacity: 0;
    }
  }
  .unset > div > p {
    opacity: 0;
  }
}
  ::-webkit-scrollbar {
    display: none;
  }
</style>